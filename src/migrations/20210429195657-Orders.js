'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      products: { type: Sequelize.JSON, notnull: true },
      amount: { type: Sequelize.DOUBLE, notnull: true },
      createdAt: { type: Sequelize.DATE, notnull: true },
      updatedAt: { type: Sequelize.DATE, notnull: true },
      deliveryTime: { type: Sequelize.DOUBLE, notnull: true },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  },
};
