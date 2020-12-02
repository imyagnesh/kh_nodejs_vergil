const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://imyagnesh:abcd1234@ds117829.mlab.com:17829/kh_mongodb_vergil?retryWrites=false",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const Courses = require("../model/coursesModel");

var index = function (req, res, next) {
  res.render("index");
};

var getData = function (req, res, next) {
  Courses.find().then((data) => {
    res.render("index", { items: data });
  });
};

var insertData = function (req, res, next) {
  var item = {
    courseName: req.body.courseName,
    Duration: req.body.Duration,
    author: req.body.author,
    pre: req.body.pre,
  };
  var data = new Courses(item);
  data.save();
  res.redirect("/");
};

var updateData = function (req, res, next) {
  var id = req.body.id;

  Courses.findById(id, function (err, doc) {
    if (err) {
      console.log("no record found");
    }
    doc.courseName = req.body.courseName;
    doc.Duration = req.body.Duration;
    doc.author = req.body.author;
    doc.pre = req.body.pre;
    doc.save();
  });

  res.redirect("/");
};

var deleteData = function (req, res, next) {
  var id = req.body.id;
  Courses.findByIdAndRemove(id).exec();
  res.redirect("/");
};

module.exports = { index, getData, insertData, updateData, deleteData };
