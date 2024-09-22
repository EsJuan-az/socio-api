/**
 * db/models/user.model.js
 * This file declares and configures the User model attributes
 * for the sequelize ORM.
 */
const { Model, DataTypes } = require('sequelize');
const USER_TABLE = 'users';
const UserSchema = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  auth0Id: {
    type: DataTypes.STRING,
    primaryKey: true,
    field: 'auth0_id',
  },
  pictureUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'placeholder',
    field: 'picture_url',
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
};

class User extends Model {
  static associate({ Business }) {
    // Here is where the associations are always made.
    // User owns many businesses.
    this.hasMany(Business, {
      as: 'businesses',
      foreignKey: 'userId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true,
    };
  }
}

module.exports = {
  model: User,
  schema: UserSchema,
  table: USER_TABLE,
};
