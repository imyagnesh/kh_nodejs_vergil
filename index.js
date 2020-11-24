var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

// initialise express
var app = express();

// set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// set all middlewares
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// added static content
app.use(express.static(path.resolve(__dirname, "public")));

// set the route
var router = require('./routes/index')
app.use("/", router);

// eerror handling for pag not found
app.use(function (req, res, next) {
  var err = new Error("Page Not found");
  err.status = 404;
  next(err);
});

// error handling for developemt
if (app.get("env") === "development") {
  app.use(function (err, req, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      err: err,
    });
  });
}

// something wrong in my code
app.use(function (err, req, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    err: {},
  });
});

app.listen(8081, function (err) {
  console.log("your app is running on port 8081");
});
