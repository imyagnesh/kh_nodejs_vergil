const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./src/models/index');
const Role = db.role;
// db.sequalize.sync();

db.sequalize.sync({ force: true }).then(() => {
  initial();
})

app.get("/", function (req, res) {
  res.json({
    message: "Welcome to Application",
  });
});

require('./src/routes/auth.routes')(app)
require('./src/routes/user.routes')(app)


const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`Server is running on port: ${PORT}`);
});

function initial() {
  Role.create({
    id: 1,
    name: 'user'
  })

  Role.create({
    id: 2,
    name: 'admin'
  })

  Role.create({
    id: 3,
    name: 'moderator'
  })
}


