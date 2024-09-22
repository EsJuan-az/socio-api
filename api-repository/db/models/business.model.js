/**
 * db/models/business.model.js
 * This file declares and configures the Business model attributes
 * for the sequelize ORM.
 */
const { Model, DataTypes } = require('sequelize');
const { table: userTable } = require('./user.model');
const BUSINESS_TABLE = 'businesses';
const BusinessSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nit: {
    type: DataTypes.STRING,
    primaryKey: true,
    field: 'NIT',
  },
  ownerId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'owner_id',
    references: {
      model: userTable,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
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
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at',
  },
};

class Business extends Model {
  static associate({ User }) {
    // Here is where the associations are always made.
    // Business belongs to User.
    this.belongsTo(User, {
      as: 'owner',
      foreignKey: 'ownerId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: BUSINESS_TABLE,
      modelName: 'Business',
      timestamps: true,
    };
  }
}

module.exports = {
  schema: BusinessSchema,
  table: BUSINESS_TABLE,
  model: Business,
};
