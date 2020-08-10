/*
const express = require('express');
const db = require('../db/userdb');
const router = express.Router();

// http://localhost:5000/adduser/
router.post('/adduser', async (req, res, next) => {
	try {
		let { newUser } = req.body;
		let results = await db.one(newUser);
		res.json(results);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

module.exports = router;
*/

const bcrypt = require("bcryptjs");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const express = require("express");
const router = express.Router();
const User = require("../db/userdb");

// Routes
router.post("/register", (req, res) => {
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
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.get("/user", (req, res) => {
	res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it. 
	//use this to show user in entire application
	console.log(req.user)
});

module.exports = router;
