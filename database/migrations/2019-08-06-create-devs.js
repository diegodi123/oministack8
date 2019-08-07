'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Dev', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bio: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE(Sequelize.DATEONLY)
      },
      updatedAt: {
        type: Sequelize.DATE(Sequelize.DATEONLY)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Dev');
  }
};