"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "development";

// Configuración
// const config = require(__dirname + "/../config/config.json")[env]; // Original
const config = require("../../config/database");


// Declaración del objeto DB
const db = {};

// Inicializar la conexión
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// Buscar en el directorio
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    // Cada modelo que hay en el directorio lo vinculamos a nuestro objeto DB
    db[model.name] = model;
  });

// Realizar las asociaciones de los modelos
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
