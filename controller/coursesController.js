const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://imyagnesh:abcd1234@ds117829.mlab.com:17829/kh_mongodb_vergil?retryWrites=false',
  { useNewUrlParser: true, useUnifiedTopology: true },
);
const Courses = require('../model/coursesModel');

const index = function (req, res) {
  res.render('index');
};

const getData = function (req, res) {
  Courses.find().then(data => {
    res.render('index', { items: data });
  });
};

const insertData = function (req, res) {
  const item = {
    courseName: req.body.courseName,
    Duration: req.body.Duration,
    author: req.body.author,
    pre: req.body.pre,
  };
  const data = new Courses(item);
  data.save();
  res.redirect('/');
};

const updateData = function (req, res) {
  const { id } = req.body;

  const callback = function (err, doc) {
    doc.courseName = req.body.courseName;
    doc.Duration = req.body.Duration;
    doc.author = req.body.author;
    doc.pre = req.body.pre;
    doc.save();
  };

  Courses.findById(id, callback);

  res.redirect('/');
};

const deleteData = function (req, res) {
  const { id } = req.body;
  Courses.findByIdAndRemove(id).exec();
  res.redirect('/');
};

module.exports = { index, getData, insertData, updateData, deleteData };
