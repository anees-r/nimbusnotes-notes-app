const express = require("express");
const router = express.Router();
const Note = require("../models/NoteModel");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");

// ROUTE 1: VIEW NOTES on /api/notes/getallnotes using GET, login required
router.get("/getallnotes", fetchUser, async (req, res) => {
  try {
    // fetch notes based on userID
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    return res.status(500).send("Internal server error!");
  }
});

// ROUTE 2: ADD NOTE on /api/notes/addnote using POST, login required
router.post(
  "/addnote",
  [
    body("title", "Title should contain atleast 3 characters!").isLength({
      min: 3,
    }),
    body("note", "Note should contain atleast 3 characters!").isLength({
      min: 6,
    }),
  ],
  fetchUser,
  async (req, res) => {
    // check if any validation errors in the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, note, tags } = req.body;
    try {
      // push note into db for current userID
      const newNote = new Note({
        title,
        note,
        tags,
        user: req.user.id,
      });
      const savedNote = await newNote.save();
      res.json(savedNote);
    } catch (error) {
      return res.status(500).send("Internal server error!");
    }
  }
);

// ROUTE 3: EDIT NOTE on /api/notes/editnote/:id using PUT, login required
router.put("/editnote/:id", fetchUser, async (req, res) => {
  const { title, note, tags } = req.body;

  try {
    // creating a new note object and then filling in the fields that the user wants to update
    const updatedNote = {};
    if (title) {
      updatedNote.title = title;
    }
    if (note) {
      updatedNote.note = note;
    }
    if (tags) {
      updatedNote.tags = tags;
    }

    // fetch note that is to be updated
    let getNote = await Note.findById(req.params.id);

    // if note does not exist
    if (!getNote) {
      return res.status(404).send("Note does not exist!");
    }

    // if not does not belong to current user
    if (getNote.user.toString() !== req.user.id) {
      return res.status(401).send("Unauthorized access!");
    }

    // update note with new information
    getNote = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: updatedNote },
      { new: true }
    );

    res.json(getNote);
  } catch (error) {
    return res.status(500).send("Internal server error!");
  }
});

// ROUTE 4: DELETE NOTE on /api/notes/deletenote/:id using DELETE, login required
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    // fetch note that is to be deleted
    let getNote = await Note.findById(req.params.id);

    // if note does not exist
    if (!getNote) {
      return res.status(404).send("Note does not exist!");
    }

    // if not does not belong to current user
    if (getNote.user.toString() !== req.user.id) {
      return res.status(403).send("Unauthorized access!");
    }

    // Delete required note
    await Note.findByIdAndDelete(req.params.id);

    res.json("Success: Note has been deleted!");
  } catch (error) {
    return res.status(500).send("Internal server error!");
  }
});

module.exports = router;
