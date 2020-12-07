module.exports = (app) => {
  const express = require("express");

  const router = express.Router();

  const authJWT = require("../middleware/authJWT");

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  const tutorials = require("../controllers/tutorial.controller");

  router.get("/", [authJWT.verifyToken], tutorials.findAll);

  router.get("/:id", tutorials.findOne);

  router.post("/", [authJWT.verifyToken, authJWT.isAdmin], tutorials.create);

  router.put("/:id", tutorials.update);

  router.delete("/:id", [authJWT.verifyToken, authJWT.isAdmin, authJWT.isModerator], tutorials.delete);

  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorial", router);
};
