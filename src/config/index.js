module.exports = {
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
