import { Options } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import conf from '@config/config';
import path from 'path';
import { DataBase, defineModels } from 'db/models';
const {
  env,
  sequelizeConfig,
}: {
  env: string;
  sequelizeConfig: any;
} = conf;
const envOptions: Options = {
  ...sequelizeConfig[env],
  models: [path.join('db', 'models')],
};
const sequelize = new Sequelize(envOptions)
export const db: DataBase = defineModels(sequelize);
