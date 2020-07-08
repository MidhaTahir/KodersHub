const express = require('express');
const db = require('../db/userdb');
const router = express.Router();

// http://localhost:5000/adduser/
router.post('/adduser', async (req, res, next) => {
	try {
		let { newUser } = req.body;
		let results = await db.one(newUser);
		res.json(results);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

module.exports = router;
