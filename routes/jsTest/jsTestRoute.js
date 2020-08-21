require('../../config/mongoose');
const { ensureAuthenticated } = require('../../config/auth');

const router = require('express').Router();
const fs = require("fs");
const JsQues = require('../../models/jsQuesModel');
const User = require("../../models/userModel");
const axios = require('axios');

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
    await JsQues.findOne({ taskNo: req.user.jsTaskPointer }, (err, doc) => {
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

        let testedJsCode = pass.results.every(test => test);
        if (testedJsCode) {
          User.findOneAndUpdate({ _id: req.user._id }, { jsTaskPointer: req.user.jsTaskPointer + 1}, ( err, document ) => { 
            if (err) console.log(err);
          })
        }
        res.send({ sol: testedJsCode });
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
router.get('/dashboard/javascript', ensureAuthenticated , async (req, res) => {
  try {
    await JsQues.findOne({ taskNo: req.user.jsTaskPointer }, (err, doc) => {
      if (err) console.log(err);
      if (doc)
        res.send({ taskStatement: doc.task, defaultHtml: '' });
      else
        res.send({ taskStatement: "Question not available", defaultHtml: ""});
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;