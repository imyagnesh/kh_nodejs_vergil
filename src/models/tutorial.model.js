const Sequalize = require("sequelize");
module.exports = (sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequalize.STRING,
    },
    description: {
      type: Sequalize.STRING,
    },
    published: {
      type: Sequalize.BOOLEAN,
    },
  });
  return Tutorial;
};
