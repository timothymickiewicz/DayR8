require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models");
const app = express();
const logger = require("morgan");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

app.use(logger("dev"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: "keyboard cat",
    rolling: true,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 100000 },
  })
);
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Requiring our routes
app.use(require("./routes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// The "catchall" handler: for any request that doesn't
// match one above, send back our index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// set port, listen for requests
const port = process.env.PORT || 5000;
db.sequelize.sync().then(function () {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });
});
