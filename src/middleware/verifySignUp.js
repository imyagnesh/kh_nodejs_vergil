const db = require("../models");
const User = db.user;
const ROLES = db.ROLES;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.sendStatus(400).send({
        message: "Username already Exist",
      });
      return;
    }
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user1) => {
      if (user1) {
        res.sendStatus(400).send({
          message: "Email already Exist",
        });
        return;
      }
      next();
    });
  });
};

checkRoleExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let index = 0; index < req.body.roles.length; index++) {
      if (!ROLES.includes(req.body.roles[index])) {
        res.sendStatus(400).send({
          message: "Role Does Not exist",
        });
        return;
      }
    }
  }

  next();
};

const varifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRoleExisted,
};

module.exports = varifySignUp;
