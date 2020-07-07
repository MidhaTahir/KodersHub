const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/",require("./routes/user"));

app.listen(PORT, console.log(`Server started to run on PORT: ${PORT}`));
