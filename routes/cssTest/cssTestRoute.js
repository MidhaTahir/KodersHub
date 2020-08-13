require('../../db/mongoose');

const express = require('express');
const router = express.Router();

const CssQues = require('../../models/cssQuesModel');

// -------- requirements for css tesing ------------
const cssParse = require('./cssParse');
const _ = require('lodash');


// ---------------------------- TESTING CSS CODE ---------------------------------------
router.post('/test/css', async (req, res) => {
	let defaultCss = '';
	
	// variable to store results of compared code
	let comparedCSScode = false;
	
	try {
		await CssQues.findOne({ taskNo: 2 }, (err, task) => {
			defaultCss = task.cssSolution;
		});
	} catch (err) {
		console.log(err);
	}

	let userCss = req.body.dataToTest;

	defaultCss = cssParse.toJSON(defaultCss);
	userCss = cssParse.toJSON(userCss);

	comparedCSScode = _.isEqual(defaultCss, userCss);
	res.send({ sol: comparedCSScode });
});

router.get('/dashboard/css', async (req, res) => {
	try {
		await CssQues.findOne({ taskNo: 2 }, (err, task) => {
			res.send({ taskStatement: task.task, defaultHtml: task.defaultHtml });
		});
	} catch (err) {
		console.log(err);
	}
});
module.exports = router;
