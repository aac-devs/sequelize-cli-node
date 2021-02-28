require("dotenv").config();
const { HOST, DATABASE, USER, DB_PORT, PASSWORD } = process.env;

module.exports = {
  username: USER,
  password: PASSWORD,
  database: DATABASE,
  host: HOST,
  dialect: "postgres",
  logging: false,
  define: {
    timestamps: false,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
