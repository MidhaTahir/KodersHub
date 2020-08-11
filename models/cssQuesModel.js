const mongoose = require('mongoose');

const cssQuesSchema = mongoose.Schema({
	taskNo: {
		type: Number,
		required: true
	},
	task: String,
	defaultHtml: String,
	cssSolution: String
});

const CssQues = new mongoose.model('CssQues', cssQuesSchema);

module.exports = CssQues;
