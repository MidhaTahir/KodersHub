const express = require("express")
const app = express()
var cors = require('cors');

app.use(cors());

app.get('/',function(req,res){
    res.send('Hello World')
})

app.listen(5000,()=>{
    console.log("Server started at " + "....")
})