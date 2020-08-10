const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/', require('./routes/user'));

const htmlTestRoute = require('./routes/htmlTestRoute');
app.use(htmlTestRoute);

const cssTestRoute = require('./routes/cssTestRoute');
app.use(cssTestRoute);

app.use(require("./routes/jsTest/jsTestRoute"));

app.listen(PORT, console.log(`Server started to run on PORT: ${PORT}`));
