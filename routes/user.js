const bcrypt = require("bcryptjs");
const passport = require("passport");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Routes
router.post("/register", (req, res) => {
  const { username , email , password } = req.body;
  
    let error = "";

    // Check required fields
    if(!username || !email || !password ){
        error = 'Please fill in all field';
    }

    // Check pass length
    if(!error && (password.length < 6)){
        error = 'Password should be atleast 6 characters';
    }

    //if any error is present
    if(error){
      console.log(error); //errors encountered during register
      res.send({ msg: error, nextRoute: "/signUp" });
    }else{
      //Validation Passed
      User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send({ msg: "User already Exists", nextRoute: "/signin" });
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
          });
          await newUser.save();
          res.send({ msg: "User Created", nextRoute: "/signin" });
        }
      });
    }
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  
  let error = "";

  // Check required fields
  if(!username || !password ){
      error = 'Please fill in all field';
  }

  if (error) {
    res.send({ msg: error })
  } else {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send({ msg: "No User Exists" });
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send({ msg: "Successfully Authenticated", nextRoute: "/dashboard" });
        });
      }
    })(req, res, next);
  }
});

router.get("/user", (req, res) => {
  res.send({ user: req.user }); 
  // The req.user stores the entire user that has been authenticated inside of it. 
	// use this to show user in entire application
});

//Logout Handle
router.get('/logout',(req,res) => {
  req.logout();
  res.send({ msg: "User Logged out!!"});
  // TODO: logic to redirect
  // res.redirect('/login');
});


module.exports = router
