const db = require("../models/index");
const redis_client = db.redis_client;

checkCacheById = (req, res, next) => {
  const id = req.params.id;

  redis_client.get(id, (err, data) => {
    if (err) {
      res.sendStatus(500).send({
        message: err.message || "Oops! Something wrong try after some time",
      });
    }
    if (data !== null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

checkCacheByQuery = (req, res, next) => {
  let key;

  if (req.query !== null) {
    key = Object.keys(req.query).join("_");
  }

  if (key !== undefined) {
    redis_client.get(key, (err, data) => {
      if (err) {
        res.sendStatus(500).send({
          message: err.message || "Oops! Something wrong try after some time",
        });
      }
      if (data !== null) {
        res.send(JSON.parse(data));
      } else {
        next();
      }
    });
  } else {
    next();
  }
};

const checkCache = {
  checkCacheById,
  checkCacheByQuery
};

module.exports = checkCache;
