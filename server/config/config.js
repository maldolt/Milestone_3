require('dotenv').config();

module.exports = {
  development: {
    username: "postgres", //process.env.DB_USERNAME,
    password: "dMp9KvHUwRhQVAuo",  //process.env.DB_PASSWORD,
    database: "postgres",//process.env.DB_NAME,
    host: "db.qtzwzoszjisovyydpjww.supabase.co",//process.env.DB_HOST,
    logging: true,
    dialect: "postgres"
  },
  "test": {
    username: "postgres", //process.env.DB_USERNAME,
    password: "dMp9KvHUwRhQVAuo",  //process.env.DB_PASSWORD,
    database: "postgres",//process.env.DB_NAME,
    host: "db.qtzwzoszjisovyydpjww.supabase.co",//process.env.DB_HOST,
    dialect: "postgres"
  },
  "production": {
    username: "postgres", //process.env.DB_USERNAME,
    password: "dMp9KvHUwRhQVAuo",  //process.env.DB_PASSWORD,
    database: "postgres",//process.env.DB_NAME,
    host: "db.qtzwzoszjisovyydpjww.supabase.co",//process.env.DB_HOST,
    dialect: "postgres"
  }
}