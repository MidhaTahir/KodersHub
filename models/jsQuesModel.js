const mongoose = require('mongoose');

const jsQuesSchema = mongoose.Schema({
  taskNo: {
		type: Number,
		required: true
	},
  task: String,
  test: String
});

const JsQues = new mongoose.model('JsQues', jsQuesSchema);

module.exports = JsQues;