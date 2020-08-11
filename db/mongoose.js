const mongoose = require('mongoose');

const connectionStr = 'mongodb://localhost:27017/codeEditor-db';

mongoose.connect(connectionStr, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});
