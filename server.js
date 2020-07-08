const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// -------- requirements for css tesing ------------
const cssParse = require('./testing2/CSSJSON');
const _ = require('lodash');
// -------------------------------------------------

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/', require('./routes/user'));

// variables to store results of compared code
let comparedHTMLcode = false;
let comparedCSScode = false;

// ---------------------------- TESTING HTML CODE ---------------------------------------
app.post('/test/html', (req, res) => {
	let str = req.body.dataToTest; //str should come from body

	let tag = 'h1';
	let attribute = '';
	let value = '';
	let selfClosing = false;

	if (selfClosing) {
		var regex2 = new RegExp(`^<(${tag})\\s?((${attribute})\\s?=?"?${value}"?\\s?)\\/?>\\s?\n?$`, 'g');
	} else {
		var regex2 = new RegExp(
			`<(${tag})\\s?((${attribute})\\s?=?"?${value}"?\\s?)\\/?>(\n?.*\n?<\\/\(${tag})>)`,
			'g'
		);
	}

	let result = str.match(regex2);

	if (result == null) {
		comparedHTMLcode = false;
	} else {
		comparedHTMLcode = true;
	}

	res.redirect('/test/html');
});

app.get('/test/html', (req, res) => {
	// we will res.send true or false on the basis of which the popup will be shown
	res.send({ sol: comparedHTMLcode });
});

// ---------------------------- TESTING CSS CODE ---------------------------------------
app.post('/test/css', (req, res) => {
	let defaultCss = 'h2{color:red;font-size:3px;}',
		userCss = req.body.dataToTest;

	defaultCss = cssParse.toJSON(defaultCss);
	userCss = cssParse.toJSON(userCss);

	comparedCSScode = _.isEqual(defaultCss, userCss);

	res.redirect('/test/css');
});
app.get('/test/css', (req, res) => {
	// we will res.send true or false on the basis of which the popup will be shown
	res.send({ sol: comparedCSScode });
});

app.listen(PORT, console.log(`Server started to run on PORT: ${PORT}`));
