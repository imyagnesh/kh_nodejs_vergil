const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require('../models')
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No Token Provided",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "unauthorized",
      });
    }

    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        console.warn(user);
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if(roles[i].name === 'admin') {
                    next();
                    return
                }
            }

            res.status(403).send({
                message: "Require Admin Role to do this action"
            });
            return;
        })
    })
}

isModerator = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        console.warn(user);
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                if(roles[i].name === 'moderator') {
                    next();
                    return
                }
            }

            res.status(403).send({
                message: "Require Admin Role to do this action"
            });
            return;
        })
    })
}

const authJWT = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator
};

module.exports = authJWT;
