const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const mongoose = require("mongoose");
// const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
// const bcrypt = require("bcryptjs");
const session = require("express-session");
// const User = require("./user");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);


app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));

const PORT = process.env.PORT || 5000;

app.use("/", require("./routes/user"));

// const htmlTestRoute = require("./routes/htmlTestRoute");
// app.use(htmlTestRoute);

// const cssTestRoute = require("./routes/cssTestRoute");
// app.use(cssTestRoute);

app.listen(PORT, console.log(`Server started to run on PORT: ${PORT}`));



