module.exports = {
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://jbnyhasarjnzlm:5bdf05f9bda38ec4ebec7b321719607ba0d4afbcb246420e6b7b5e3f4ea14e2d@ec2-54-235-158-17.compute-1.amazonaws.com:5432/d8cvnmd2agc6io',
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
