const connectToMongo = require("./db");

connectToMongo();

const express = require("express");
const app = express();
const port = 5000;

// middle ware from express to read json
app.use(express.json());

// available routes
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/notes", require("./routes/notesRoute"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
