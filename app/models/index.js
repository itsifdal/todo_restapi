const config  = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      dialect: 'mysql', // Specify the dialect explicitly
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require("./todo.model.js")(sequelize, Sequelize);
db.activities = require("./activity.model.js")(sequelize, Sequelize);

module.exports = db;