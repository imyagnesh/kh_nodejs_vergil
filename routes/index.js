var express = require("express");
var router = express.Router();
const { body, validationResult } = require("express-validator");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://imyagnesh:abcd1234@ds117829.mlab.com:17829/kh_mongodb_vergil?retryWrites=false",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
var Schema = mongoose.Schema;

const courses = new Schema(
  {
    courseName: { type: String, required: true },
    Duration: { type: Number, max: 100, min: 12 },
    author: { type: String },
    pre: String,
  },
  { collation: "courses" }
);

var Courses = mongoose.model('courses', courses);

// const db = require("monk")(
//   "mongodb://imyagnesh:abcd1234@ds117829.mlab.com:17829/kh_mongodb_vergil?retryWrites=false"
// );

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/get-data", function (req, res, next) {
  Courses.find().then((data) => {
    console.log("🚀 ~ file: index.js ~ line 33 ~ Courses.find ~ data", data)
    res.render("index", { items: data });
  });
});

router.post("/insert", function (req, res, next) {
  var item = {
    courseName: req.body.courseName,
    Duration: req.body.Duration,
    author: req.body.author,
    pre: req.body.pre,
  };
  var data = new Courses(item);
  data.save();
  res.redirect('/')
});

router.post("/update", function (req, res, next) {
  var id = req.body.id;

  Courses.findById(id, function(err, doc) {
      if(err) {
        console.log('no record found')
      }
      doc.courseName = req.body.courseName;
      doc.Duration = req.body.Duration;
      doc.author = req.body.author;
      doc.pre = req.body.pre;
      doc.save();
  })

  res.redirect('/')
});

router.post("/delete", function (req, res, next) {
  var id = req.body.id;
  Courses.findByIdAndRemove(id).exec();
  res.redirect('/')
});

// var express = require("express");
// var router = express.Router();
// const { body, validationResult } = require("express-validator");
// var mongo = require("mongodb").MongoClient;
// var objectId = require('mongodb').ObjectID;
// const assert = require("assert");

// var url =
//   "mongodb://imyagnesh:abcd1234@ds117829.mlab.com:17829/kh_mongodb_vergil";

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

// router.get('/get-data', function(req, res, next) {
//   var resultArray = [];
//   mongo.connect(url, function(err, client) {
//     assert.strictEqual(null, err);
//     const db = client.db("kh_mongodb_vergil");
//     const cursor = db.collection("courses").find();
//     cursor.forEach(function(doc, err) {
//       assert.strictEqual(null, err);
//       resultArray.push(doc);
//     }, function() {
//       client.close();
//       console.log("🚀 ~ file: index.js ~ line 27 ~ cursor.forEach ~ resultArray", JSON.stringify(resultArray))
//       res.render('index', {items: resultArray});
//     });
//   });
// });

// router.post('/insert', function(req, res, next) {
//   var item = {
//     courseName: req.body.courseName,
//     Duration: req.body.Duration,
//     author: req.body.author,
//     pre: req.body.pre
//   };

//   mongo.connect(url, function(err, client) {
//     assert.strictEqual(null, err);
//     const db = client.db("kh_mongodb_vergil");
//     db.collection('courses').insertOne(item, function(err, result) {
//       assert.strictEqual(null, err);
//       db.close();
//     });
//   });

//   res.redirect('/');
// });

// router.post('/update', function(req, res, next) {
//   var item = {
//     courseName: req.body.courseName,
//     Duration: req.body.Duration,
//     author: req.body.author,
//     pre: req.body.pre
//   };
//   console.log("🚀 ~ file: index.js ~ line 60 ~ router.post ~ item", item)
//   var id = req.body.id;

//   mongo.connect(url, function(err, client) {
//     assert.strictEqual(null, err);
//     const db = client.db("kh_mongodb_vergil");
//     db.collection('courses').updateOne({"courseName": req.body.courseName}, {$set: item}, function(err, result) {
//       assert.strictEqual(null, err);
//       console.log('Item updated');
//       client.close();
//     });
//   });
// });

// router.post('/delete', function(req, res, next) {
//   var id = req.body.id;

//   mongo.connect(url, function(err, client) {
//     assert.equal(null, err);
//     const db = client.db("kh_mongodb_vergil");
//     db.collection('courses').deleteOne({"_id": objectId(id)}, function(err, result) {
//       assert.equal(null, err);
//       console.log('Item deleted');
//       client.close();
//     });
//   });
// });

module.exports = router;
