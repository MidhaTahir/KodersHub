// importing modules
const path = require("path");
const fs = require("fs");
const cssParse = require("./CSSJSON");
var _ = require('lodash');

// reading CSS files
let defaultCss = '',userCss = '';

fs.readFile(path.join(__dirname,'stylesheet','default.txt'),'utf-8',(err,data)=>{
  if(err){
    console.log(err)
    return
  }
  defaultCss = data
  fs.readFile(path.join(__dirname,'stylesheet','user.txt'),'utf-8',(err,data)=>{
    if(err){
      console.log(err)
      return
    }
    userCss = data
    defaultCss = cssParse.toJSON(defaultCss)
    userCss = cssParse.toJSON(userCss)

    let flag =  _.isEqual(defaultCss, userCss)

    if (flag) console.log("Test Passed!!!");
    else console.log("Test Failed");
  })
  
})


