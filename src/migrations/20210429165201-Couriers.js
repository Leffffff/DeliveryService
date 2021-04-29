'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('couriers', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, notnull: true },
      createdAt: { type: Sequelize.DATE, notnull: true },
      updatedAt: { type: Sequelize.DATE, notnull: true },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('couriers');
  },
};
