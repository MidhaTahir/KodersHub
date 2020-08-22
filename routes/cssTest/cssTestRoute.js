require('../../config/mongoose');
const { ensureAuthenticated } = require('../../config/auth');
const express = require('express');
const router = express.Router();
const User = require('../../models/userModel');
const axios = require('axios');

const CssQues = require('../../models/cssQuesModel');

// -------- requirements for css tesing ------------
const cssParse = require('./cssParse');
const { isEqual } = require('lodash');

// ---------------------------- TESTING CSS CODE ---------------------------------------
router.post('/test/css', async (req, res) => {
	let defaultCss = '';

	// variable to store results of compared code
	let comparedCSScode = false;

	try {
		let userTaskNo = await req.user.cssTaskPointer;
		let count = 0;
		await CssQues.countDocuments({}, async (err, total) => {
			count = total;

			if (userTaskNo <= count) {
				await CssQues.findOne({ taskNo: userTaskNo }, (err, task) => {
					defaultCss = task.cssSolution;
		
					let userCss = req.body.dataToTest;
		
					defaultCss = cssParse.toJSON(defaultCss);
					userCss = cssParse.toJSON(userCss);
		
					comparedCSScode = isEqual(defaultCss, userCss);
		
					if (comparedCSScode) {
						User.findOneAndUpdate(
							{ _id: req.user._id },
							{ cssTaskPointer: req.user.cssTaskPointer + 1 },
							(err, document) => {
								if (err) console.log(err);
							}
						);
					}
					res.send({ sol: comparedCSScode });
				});
			} else {
				res.send("css qs have ended");
			}
		});
		
	} catch (err) {
		console.log(err);
	}

});

router.get('/dashboard/css', ensureAuthenticated, async (req, res) => {
	try {
		await CssQues.findOne({ taskNo: req.user.cssTaskPointer }, (err, task) => {
			if (err) console.log(err);
			if (task) {
				res.send({ taskStatement: task.task, defaultHtml: task.defaultHtml });
			} else {
				res.send({ taskStatement: 'Question not available.', defaultHtml: '' });
			}
		});
	} catch (err) {
		console.log(err);
	}
});
module.exports = router;
