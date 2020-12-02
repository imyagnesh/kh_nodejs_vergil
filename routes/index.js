var express = require("express");
var router = express.Router();
var coursesController = require('../controller/coursesController')

router.get("/", coursesController.index);

router.get("/get-data", coursesController.getData);

router.post("/insert", coursesController.insertData);

router.post("/update", coursesController.updateData);

router.post("/delete", coursesController.deleteData);

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
