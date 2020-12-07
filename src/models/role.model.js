const Sequalize = require("sequelize");
module.exports = (sequelize) => {
  const Role = sequelize.define("role", {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequalize.STRING,
    },
  });
  return Role;
};
