const mongoose = require("mongoose");
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

var Courses = mongoose.model("courses", courses);

module.exports = Courses;
