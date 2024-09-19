/**
 * config/index.ts
 * This file will be used to import all the config stored in the .env file for
 * its general use.
 */
import { configDotenv } from "dotenv";
import sequelizeConfig from "./sequelize.json";
configDotenv();
// Configuration object.
export default {
  env: process.env.NODE_ENV || 'development',
  sequelizeConfig,
};