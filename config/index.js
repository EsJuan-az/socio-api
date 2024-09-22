const { configDotenv } = require('dotenv');
const path = require('path');
const parentEnvPath = path.resolve(__dirname, '..', '.env');
configDotenv({
  path: parentEnvPath,
});
module.exports = {
  env: process.env.NODE_ENV || 'development',
  REPOSITORY_PORT: process.env.REPOSITORY_PORT,
};
