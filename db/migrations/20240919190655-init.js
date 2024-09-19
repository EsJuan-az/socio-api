'use strict';

const { Sequelize } = require('sequelize');

const userSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  auth0_id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  picture_url: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'placeholder',
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
}
const businessSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4, // Genera automáticamente un UUID
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  NIT: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  owner_id: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: 'users', 
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  picture_url: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'placeholder',
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', userSchema)
    await queryInterface.createTable('businesses', businessSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('business');
    await queryInterface.dropTable('users');
    
  },
};
