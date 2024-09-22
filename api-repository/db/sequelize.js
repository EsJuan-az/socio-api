/**
 * db/sequelize.js
 * Defines a Sequelize instance and, embeding the models on it, exports it.
 */
const { Sequelize } = require('sequelize');
const conf = require('../config');
const { defineModels } = require('./models');
const { env, sequelizeConfig } = conf;
const envConf = sequelizeConfig[env];

const sequelize = new Sequelize(envConf.url, envConf);
const db = defineModels(sequelize);
module.exports = {
  db,
};
