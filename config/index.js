const { configDotenv } = require('dotenv');
configDotenv();
module.exports = {
  env: process.env.NODE_ENV || 'development',
  REPOSITORY_PORT: process.env.REPOSITORY_PORT,
};
console.log(process.env.HOLAA);
