const Sequalize = require("sequelize");
const redis = require('redis');
const dbConfig = require("../config/index");



let sequalize;

if (dbConfig.DATABASE_URL) {
  sequalize = new Sequalize(dbConfig.DATABASE_URL);
} else {
  sequalize = new Sequalize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
  });
}

const redis_client = redis.createClient(dbConfig.REDIS_PORT)

const db = {};

db.redis_client = redis_client;

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
