const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");

const JWT_SECRET = "JWT_SECRET_FOR_NIMBUS_NOTES";

// ROUTE 1: REGISTER a user on /api/auth/register using POST, no login required
router.post(
  "/register",
  [
    body("name", "Name should contain atleast 3 characters!").isLength({
      min: 3,
    }),
    body("email", "Invalid Email!").isEmail(),
    body("password", "Password should contain atleast 6 characters!").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // check if any validation errors in the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // check if user with this email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "A user with this Email already exists!" });
      }

      // hashing password using bcrypt
      const salt = await bcrypt.genSaltSync(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // if unique email then create a user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      // generating web token
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, "JWT_SECRET_FOR_NIMBUS_NOTES");

      res.json(authToken);
    } catch (error) {
      return res.status(500).send("Internal server error!");
    }
  }
);

// ROUTE 2: LOGIN a user on /api/auth/login using POST, no login required
router.post(
  "/login",
  [
    body("email", "Invalid Email!").isEmail(),
    body("password", "Password should not be empty!").exists(),
  ],
  async (req, res) => {
    // check if any validation errors in the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      // check if user with this email already exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Enter valid credentials!" });
      }

      // compairing entered password with stored password after hashing
      const compairPassword = await bcrypt.compare(password, user.password);
      if (!compairPassword) {
        return res.status(400).json({ error: "Enter valid credentials!" });
      }

      // generating web token
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json(authToken);
    } catch (error) {
      return res.status(500).send("Internal server error!");
    }
  }
);

// ROUTE 3: GET USER middleware to verify auth token and fetch user on /api/auth/getuser using POST, login required
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    // after verifying user auth token, fetch user details except password based on userID
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.json(user);
  } catch (error) {
    return res.status(500).send("Internal server error!");
  }
});

module.exports = router;
