module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS_PORT: process.env.PORT || 6379,
  HOST: process.env.HOST || "127.0.0.1",
  USER: process.env.USER || "yagneshmodh",
  PASSWORD: process.env.PASSWORD || "",
  DB: process.env.DB || "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
