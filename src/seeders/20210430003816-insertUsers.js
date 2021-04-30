'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'clients',
      [
        {
          name: 'John',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Max',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Lev',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gleb',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Tolik',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('clients', null, {});
  },
};
