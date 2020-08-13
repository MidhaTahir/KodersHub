require('../../db/mongoose');

const router = require('express').Router();
const fs = require("fs");
const JsQues = require('../../models/jsQuesModel');

// -------- requirements for js testing ---------
const MochaTester = require("./mochaTester");

// route to test Javascript
router.post("/test/javascript", async (req, res) => {
  const js = req.body.dataToTest;
  let jsTest = `
  const { expect } = require("chai");
  const resnap = require("resnap")();
  `;

  try {
    await JsQues.findOne({ taskNo: '1' }, (err, doc) => {
      jsTest += doc.test;
    });
  } catch (err) {
    console.log(err);
  }

  fs.writeFileSync("program_test.js", jsTest);

  fs.writeFile("./program.js", js, () => {
    MochaTester("./program_test.js")
      .then((pass) => {
        fs.unlink("./program.js", () => {});
        fs.unlink("./program_test.js", () => {});
        res.send({ sol: pass.results.every(test => test) });
      })
      .catch((err) => {
        console.log(err);
        fs.unlink("./program.js", () => {});
        fs.unlink("./program_test.js", () => {});
        res.send({ sol: false });
      });
  });
});

// !Make this route as /task/:lang not dashboard/:lang due to clash of routes
router.get('/dashboard/javascript', async (req, res) => {
  try {
    await JsQues.findOne({ taskNo: '1' }, (err, doc) => {
      if (err) console.log(err);
      if (doc)
        res.send({ taskStatement: doc.task, defaultHtml: '' });
      else
        res.send({ taskStatement: "Question Doesnot exist", defaultHtml: ""});
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;