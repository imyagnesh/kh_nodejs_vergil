const Sequalize = require("sequelize");
const dbConfig = require("../config/index");

// let sequalize;

// if (dbConfig.DATABASE_URL) {
//   sequalize = new Sequalize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     pool: dbConfig.pool,
//   });
// } else {
  
// }

const sequalize = new Sequalize('postgres://jbnyhasarjnzlm:5bdf05f9bda38ec4ebec7b321719607ba0d4afbcb246420e6b7b5e3f4ea14e2d@ec2-54-235-158-17.compute-1.amazonaws.com:5432/d8cvnmd2agc6io');

const db = {};

// db.Sequalize = Sequalize;
db.sequalize = sequalize;
db.tutorial = require("./tutorial.model.js")(sequalize);
db.user = require("./user.model.js")(sequalize);
db.role = require("./role.model.js")(sequalize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
