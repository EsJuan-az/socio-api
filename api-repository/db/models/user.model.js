/**
 * db/models/user.model.js
 * This file declares and configures the User model attributes
 * for the sequelize ORM.
 */
const { Model, DataTypes } = require('sequelize');
const USER_TABLE = 'users';
const UserSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  auth0Id: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
    field: 'auth0_id',
  },
  pictureUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'placeholder',
    field: 'picture_url',
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
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
      foreignKey: 'ownerId',
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
