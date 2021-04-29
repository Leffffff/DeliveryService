'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orders', 'clientId', {
      type: Sequelize.INTEGER,
      notNull: true,
    });
    await queryInterface.addColumn('orders', 'restaurantId', {
      type: Sequelize.INTEGER,
      notNull: true,
    });
    await queryInterface.addColumn('orders', 'courierId', {
      type: Sequelize.INTEGER,
      notNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orders', 'clientId');
    await queryInterface.removeColumn('orders', 'restaurantId');
    await queryInterface.removeColumn('orders', 'courierId');
  },
};
