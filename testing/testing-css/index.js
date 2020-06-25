// importing modules
const path = require("path");
const fs = require("fs");
const cssParse = require("./CSSJSON");
var _ = require('lodash');

// reading CSS files
let defaultCss = `h1 {
  color: black;
  font-size: 24px;
  background-color: #fff;
}
`,
  userCss = `h1 {
    color: black;
    background-color: #fff;
    font-size: 24px;
  }
  `;

defaultCss = cssParse.toJSON(defaultCss)
userCss = cssParse.toJSON(userCss)

let flag =  _.isEqual(defaultCss, userCss)

if (flag) console.log("Test Passed!!!");
else console.log("Test Failed");
