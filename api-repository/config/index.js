const { configDotenv } = require('dotenv');
const global = require('../../config');
/**
 * config/config.js
 * This file will be used to import all the config stored in the .env file for
 * its general use.
 */
configDotenv();
module.exports = {
  ...global,
  sequelizeConfig: {
    development: {
      url: process.env.SEQ_URI_DEV,
      dialect: 'postgres',
      logging: (sql) => console.log(sql + '\n\n'),
    },
    production: {
      url: process.env.SEQ_URI_PROD,
      dialect: 'postgres',
      logging: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Configuración específica para evitar errores de certificado en desarrollo
        },
      },
    },
    test: {
      url: process.env.SEQ_URI_TEST,
      dialect: 'postgres',
      logging: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Configuración específica para evitar errores de certificado en desarrollo
        },
      },
    },
  },
};
