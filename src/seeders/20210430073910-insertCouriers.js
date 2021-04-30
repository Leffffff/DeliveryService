'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'couriers',
      [
        {
          name: 'Rob',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Valik',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Sergey',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Vanya',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('couriers', null, {});
  },
};
