const bcrypt = require("bcryptjs");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Routes
router.post("/register", (req, res) => {
  const { username , email , password } = req.body;
  
    let errors = [];
    
    //Check required fields
    if(!username || !email || !password ){
        errors.push({msg: 'Please fill in all field'})
    }

    // Check pass length
    if(password.length < 6){
        errors.push({msg:'Password should be atleast 6 characters'});
    }

    //if any error is present
    if(errors.length > 0){
      console.log(errors); //errors encountered during register
    }else{
        //Validation Passed
          User.findOne({ username: req.body.username }, async (err, doc) => {
            if (err) throw err;
            if (doc) res.send("User already Exists");
            if (!doc) {
              const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
              const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
              });
              await newUser.save();
              res.send("User Created");
            }
          });
    }
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
});



router.get("/user", (req, res) => {
	res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it. 
	//use this to show user in entire application
});

//Logout Handle
router.get('/logout',(req,res) => {
  req.logout();
  res.redirect('/login');
});


module.exports = router
