'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('clients', 'createdAt', {
      type: Sequelize.DATE,
      notNull: true,
    });
    await queryInterface.addColumn('clients', 'updatedAt', {
      type: Sequelize.DATE,
      notNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('clients', 'createdAt');
    await queryInterface.removeColumn('clients', 'updatedAt');
  },
};
