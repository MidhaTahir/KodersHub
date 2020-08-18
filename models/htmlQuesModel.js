const mongoose = require('mongoose');

const htmlQuesSchema = mongoose.Schema({
	taskNo: {
		type: Number,
		required: true
	},
	task: String,
	defaultHtml: String,
	tag: String,
	attribute: String,
	value: String,
	selfClosing: Boolean
});

const HtmlQues = new mongoose.model('HtmlQues', htmlQuesSchema);

module.exports = HtmlQues;
