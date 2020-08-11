const router = require('express').Router();
const fs = require("fs");
const MochaTester = require("./mochaTester");

// route to test Javascript
router.post("/test/js/:num", (req, res) => {
  const js = req.body.dataToTest;
  
  fs.writeFile("./program.js", js, () => {
    MochaTester(`tests/program_test_${req.params.num}.js`)
      .then((pass) => {
        fs.unlink("./program.js", () => {});
        res.send({ sol: pass.results.every(test => test) });
      })
      .catch((err) => {
        console.log(err);
        fs.unlink("./program.js", () => {});
        res.send({ sol: false });
      });
  });
});

module.exports = router;