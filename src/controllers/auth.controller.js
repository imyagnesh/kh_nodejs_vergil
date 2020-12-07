var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const Op = require("sequelize").Op;
const db = require("../models/index");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

exports.signup = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({
              message: "User registered Successfully",
            });
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "user not found",
        });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          message: "Invalid Password",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400,
      });

      var authorities = [];

      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          const element = roles[i];
          authorities.push(element.name);
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          token: token,
          roles: authorities,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
