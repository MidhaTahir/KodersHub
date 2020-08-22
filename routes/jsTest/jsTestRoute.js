require('../../config/mongoose');
const { ensureAuthenticated } = require('../../config/auth');

const router = require('express').Router();
const fs = require("fs");
const JsQues = require('../../models/jsQuesModel');
const User = require("../../models/userModel");


// route to test Javascript
router.post("/test/javascript", async (req, res) => {
  let jsTest = `
  const { expect } = require("chai");
  const resnap = require("resnap")();
  `;
  
  try {
    let userTaskNo = await req.user.jsTaskPointer;
    let count = 0;
    
    JsQues.countDocuments({}, async (err, total) => {
      count = total;
      if (userTaskNo <= count) {

        const clearCache = require('resnap')();
        // -------- requirements for js testing ---------
        const MochaTester = require("./mochaTester");
        
        await JsQues.findOne({ taskNo: userTaskNo }, (err, doc) => {
          const js = req.body.dataToTest;
          jsTest += doc.test;

          fs.writeFileSync("program_test.js", jsTest);

          fs.writeFile("./program.js", js, () => {
            MochaTester("./program_test.js")
              .then((pass) => {
                // fs.unlink("./program.js", () => { });
                // fs.unlink("./program_test.js", () => { });

                let testedJsCode = pass.results.every(test => test);
                if (testedJsCode) {
                  User.findOneAndUpdate({ _id: req.user._id }, { jsTaskPointer: req.user.jsTaskPointer + 1 }, (err, document) => {
                    if (err) console.log(err);
                  })
                }
                clearCache();
                res.send({ sol: testedJsCode });
              })
              .catch((err) => {
                console.log(err);
                // fs.unlink("./program.js", () => { });
                // fs.unlink("./program_test.js", () => { });
                clearCache();
                res.send({ sol: false });
              });
          });
        });
      } else {
        res.send("js qs ended.");
      }
    });

  } catch (err) {
    console.log(err);
  }
});

// !Make this route as /task/:lang not dashboard/:lang due to clash of routes
router.get('/ques/javascript', ensureAuthenticated, async (req, res) => {
  try {
    await JsQues.findOne({ taskNo: req.user.jsTaskPointer }, (err, doc) => {
      if (err) console.log(err);
      if (doc)
        res.send({ taskStatement: doc.task, defaultHtml: '' });
      else
        res.send({ taskStatement: "You have completed all Javascript tasks!! No more questions!!", defaultHtml: "" });
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;