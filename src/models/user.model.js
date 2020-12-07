const Sequalize = require("sequelize");
module.exports = (sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequalize.STRING,
    },
    email: {
      type: Sequalize.STRING,
    },
    password: { 
      type: Sequalize.STRING,
    },
  });
  return User;
};
