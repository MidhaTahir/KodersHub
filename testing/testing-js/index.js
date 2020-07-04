const express = require("express");
const fs = require("fs");
const MochaTester = require("./main");

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  const js = req.body.js;
  fs.writeFile("program.js", js, () => {
    MochaTester("program_test.js")
      .then((pass) => {
        res.json(pass);
      })
      .catch((err) => {
        res.json({ err });
      });
  });
});

app.listen(5000, () => {
  console.log("Server listening on http://localhost:5000");
});
