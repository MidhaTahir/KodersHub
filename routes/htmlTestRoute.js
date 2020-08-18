require('../config/mongoose');

const express = require('express');
const router = express.Router();

const HtmlQues = require('../models/htmlQuesModel');

// variable to store results of compared code
let comparedHTMLcode = false;

// ---------------------------- TESTING HTML CODE ---------------------------------------
router.post('/test/html', async (req, res) => {
	let tag = '';
	let attribute = '';
	let value = '';
	let selfClosing = false;

	try {
		await HtmlQues.findOne({ taskNo: 3 }, (err, task) => {
			tag = task.tag;
			attribute = task.attribute;
			value = task.value;
			selfClosing = task.selfClosing;
		});
	} catch (err) {
		console.log(err);
	}

	let str = req.body.dataToTest; //str should come from body

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

router.get('/dashboard/html', async (req, res) => {
	try {
		await HtmlQues.findOne({ taskNo: 3 }, (err, task) => {
			res.send({
				taskStatement: task.task
			});
		});
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
