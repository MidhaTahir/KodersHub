const express = require('express');
const router = express.Router();

// -------- requirements for css tesing ------------
const cssParse = require('../testing2/CSSJSON');
const _ = require('lodash');

// variable to store results of compared code
let comparedCSScode = false;

// ---------------------------- TESTING CSS CODE ---------------------------------------
router.post('/test/css', (req, res) => {
	let defaultCss = 'h2{color:red;font-size:3px;}',
		userCss = req.body.dataToTest;

	defaultCss = cssParse.toJSON(defaultCss);
	userCss = cssParse.toJSON(userCss);

	comparedCSScode = _.isEqual(defaultCss, userCss);

	res.redirect('/test/css');
});

router.get('/test/css', (req, res) => {
	// we will res.send true or false on the basis of which the popup will be shown
	res.send({ sol: comparedCSScode });
});

module.exports = router;
