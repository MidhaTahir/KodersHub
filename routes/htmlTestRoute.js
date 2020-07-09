const express = require('express');
const router = express.Router();

// variable to store results of compared code
let comparedHTMLcode = false;

// ---------------------------- TESTING HTML CODE ---------------------------------------
router.post('/test/html', (req, res) => {
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

router.get('/test/html', (req, res) => {
	// we will res.send true or false on the basis of which the popup will be shown
	res.send({ sol: comparedHTMLcode });
});

module.exports = router;
