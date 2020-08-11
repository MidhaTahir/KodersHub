const mongoose = require('mongoose');
const passportLocalMongooose = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
	username: String,
	password: String
});

userSchema.plugin(passportLocalMongooose);

const User = new mongoose.model('User', userSchema);

module.exports = User;
