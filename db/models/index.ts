import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes, Model as RawModel, ModelStatic } from 'sequelize';
interface Model extends ModelStatic<RawModel> {
  associate?: (models: any) => void;
}
const basename = path.basename(__filename);

export type DataBase = { [key: string]: Model } & { sequelize?: Sequelize, Sequelize?: typeof Sequelize };
export function defineModels( sequelize: Sequelize ){
  let db: DataBase = {};
  fs.readdirSync(__dirname)
    .filter((file: string) => {
      return (
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.ts'
      );
    })
    .forEach((file: string) => {
      const model: Model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
      db[model.name] = model;
    });
  Object.keys(db).forEach((modelName: string) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  return db;
}
