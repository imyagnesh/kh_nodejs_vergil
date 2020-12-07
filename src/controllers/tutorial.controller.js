const Op = require("sequelize").Op;
const db = require("../models/index");
const Tutorial = db.tutorial;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit , offset };
}

exports.create = function (req, res) {
  if (!req.body.title) {
    res.sendStatus(400).send({
      message: "title should not be empty",
    });
  }

  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published,
  };

  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(500).send({
        message: err.message || "Oops! Something wrong try after some time",
      });
    });
};

exports.update = function (req, res) {
  const id = req.params.id;

  if (!req.body.title) {
    res.sendStatus(400).send({
      message: "title should not be empty",
    });
  }

  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published,
  };

  Tutorial.update(tutorial, {
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "tutorial updated successfully",
        });
      } else {
        res.send({
          message: "cannot update this tutorial bcz id is not found",
        });
      }
    })
    .catch((err) => {
      res.sendStatus(500).send({
        message: err.message || "Oops! Something wrong try after some time",
      });
    });
};

exports.findAll = function (req, res) {
  const page = req.query.page;
  const size = req.query.size;
  const title = req.query.title;
  const condition = title ? {
    title: {
      [Op.like]: `%${title}%`
    }
  } : null;
  
  const { limit, offset} = getPagination(page,size );

  Tutorial.findAll({
    where: condition, limit, offset
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(500).send({
        message: err.message || "Oops! Something wrong try after some time",
      });
    });
};

exports.findOne = function (req, res) {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.sendStatus(500).send({
        message: err.message || "Oops! Something wrong try after some time",
      });
    });
};

exports.delete = function (req, res) {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "tutorial deleted successfully",
        });
      } else {
        res.send({
          message: "cannot delete this tutorial bcz id is not found",
        });
      }
    })
    .catch((err) => {
      res.sendStatus(500).send({
        message: err.message || "Oops! Something wrong try after some time",
      });
    });
};

exports.deleteAll = function (req, res) {
  Tutorial.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} tutorials are deleted`,
      });
    })
    .catch((err) => {
      res.sendStatus(500).send({
        message: err.message || "Oops! Something wrong try after some time",
      });
    });
};
