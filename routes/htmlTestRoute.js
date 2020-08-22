require('../config/mongoose');
const { ensureAuthenticated } = require('../config/auth');

const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const axios = require('axios');

const HtmlQues = require('../models/htmlQuesModel');

// ---------------------------- TESTING HTML CODE ---------------------------------------
router.post('/test/html', async (req, res) => {
	// variable to store results of compared code
	let comparedHTMLcode = false;

	let tag = '';
	let attribute = '';
	let value = '';
	let selfClosing = false;

	try {
		let userTaskNo = await req.user.htmlTaskPointer;
		let count = 0;

		await HtmlQues.countDocuments({}, async (err, total) => {
			count = total;
			if (userTaskNo <= count) {
				await HtmlQues.findOne({ taskNo: userTaskNo }, (err, task) => {
					tag = task.tag;
					attribute = task.attribute;
					value = task.value;
					selfClosing = task.selfClosing;
					console.log("I fetched from DB: ", task);

					let str = req.body.dataToTest; //str should come from body
					console.log("You gave me: ", str);

					if (selfClosing) {
						var regex2 = new RegExp(`^<(${tag})\\s?((${attribute})\\s?=?"?${value}"?\\s?)\\/?>\\s?\n?$`, 'g');
					} else {
						var regex2 = new RegExp(
							`<(${tag})\\s?((${attribute})\\s?=?"?${value}"?\\s?)\\/?>(\n?.*\n?<\\/\(${tag})>)`,
							'g'
						);
					}

					let result = str.match(regex2);
					console.log("The result became: ", result);

					if (result == null) {
						comparedHTMLcode = false;
					} else {
						comparedHTMLcode = true;
					}

					if (comparedHTMLcode) {
						User.findOneAndUpdate(
							{ _id: req.user._id },
							{ htmlTaskPointer: req.user.htmlTaskPointer + 1 },
							(err, document) => {
								if (err) console.log(err);
							}
						);
					}
					// we will res.send true or false on the basis of which the popup will be shown
					res.send({ sol: comparedHTMLcode });
				});
			} else {
				res.send("html qs ended.")
			}
		})

	} catch (err) {
		console.log(err);
	}
});

router.get('/dashboard/html', ensureAuthenticated, async (req, res) => {
	try {
		await HtmlQues.findOne({ taskNo: req.user.htmlTaskPointer }, (err, task) => {
			if (task) {
				res.send({
					taskStatement: task.task
				});
			} else {
				res.send({
					taskStatement: 'Question not available.'
				});
			}
		});
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
