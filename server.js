require('./config/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const path = require('path')
//--------------------- END OF IMPORT----------------

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		credentials: true
	})
);

app.use(
	session({
		secret: 'secretcode',
		resave: true,
		saveUninitialized: true
	})
);

app.use(cookieParser('secretcode'));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

//--------------------- END OF MIDDLEWARE----------------

const PORT = process.env.PORT || 5000;

app.use('/', require('./routes/user'));

app.use(require("./routes/htmlTestRoute"));

app.use(require("./routes/cssTest/cssTestRoute"));

app.use(require('./routes/jsTest/jsTestRoute'));

//--------------------- END OF ROUTES ----------------

//----------------- STATIC CONTENT -------------------
app.use(express.static("client/build"));
/*
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})
*/
app.listen(PORT, console.log(`Server started to run on PORT: ${PORT}`));
