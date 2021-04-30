'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('restaurants', [
      {
        name: 'McDonalds',
        menu: JSON.stringify([
          { name: 'McDouble', cost: 1.39 },
          { name: 'MacChicken', cost: 1.29 },
        ]),
      },
      {
        name: 'KFC',
        menu: JSON.stringify([
          { name: '12 Pc. Chicken Only', cost: 20.49 },
          { name: '8 Pc. Chicken Only', cost: 14.99 },
        ]),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('restaurants', null, {});
  },
};
