var Sequelize = require("sequelize");
var db = new Sequelize("kuliah", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
