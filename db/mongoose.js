const mongoose = require('mongoose');

const connectionStr = 'mongodb+srv://midha:0307seematahir@editor.rsk7o.mongodb.net/kodershub?retryWrites=true&w=majority';



mongoose.connect(connectionStr, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});
