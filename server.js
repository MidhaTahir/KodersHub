const express = require("express")
const app = express()

app.get('/',function(req,res){
    res.send('Hello World')
})

app.listen(5000,()=>{
    console.log("Server started at " + "....")
})