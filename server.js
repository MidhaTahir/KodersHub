// Make mongoose connection
require('./db/mongoose');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// --------------------------------------------------------------------
// Authentication
const passport = require('passport');
const localStrategy = require('passport-local');
const expresSession = require('express-session');
const User = require('./models/user');

// PASSPORT CONFIGURATION
app.use(
	expresSession({
		secret: 'Our codeEditor Secrett!! There is a cookie in the jar!',
		resave: false,
		saveUninitialized: false
	})
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new localStrategy(User.authenticate()));
// --------------------------------------------------------------------------------

const PORT = process.env.PORT || 5000;

app.use('/', require('./routes/user'));

const htmlTestRoute = require('./routes/htmlTestRoute');
app.use(htmlTestRoute);

const cssTestRoute = require('./routes/cssTestRoute');
app.use(cssTestRoute);

let userCreated = '';
app.get('/register', (req, res) => {
	// console.log('this is sign up from node');
	// res.send('signup from node');
	// this should be rengering sign up again in case of error
	// res.send({ result: userCreated });
});

app.post('/register', (req, res) => {
	let newUser = new User({ username: req.body.userData.userDataName });
	User.register(newUser, req.body.userData.userDataPassword, (err, user) => {
		if (err) {
			userCreated = false;

			return console.log('error from user creation', err);
			// here you should show the signup form again
		}

		passport.authenticate('local')(req, res, () => {
			userCreated = true;
			console.log('user created successfully');
			// res.redirect('/');
			// res.redirect to some useful place
		});
	});
});
app.listen(PORT, console.log(`Server started to run on PORT: ${PORT}`));
