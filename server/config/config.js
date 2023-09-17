require('dotenv').config();

module.exports = {
  development: {
    username: "postgres", //process.env.DB_USERNAME,
    password: "ASPlBGIR29n1odpY",  //process.env.DB_PASSWORD,
    database: "postgres",//process.env.DB_NAME,
    host: "db.qtzwzoszjisovyydpjww.supabase.co",//process.env.DB_HOST,
    logging: true,
    dialect: "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
}