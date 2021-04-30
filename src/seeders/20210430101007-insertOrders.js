'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [
      {
        clientId: 1,
        restaurantId: 1,
        courierId: 1,
        products: JSON.stringify([
          { name: 'McDouble', cost: 3.39 },
          { name: 'MacChicken', cost: 3.29 },
        ]),
        amount: 6.68,
        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryTime: 40,
        address: 'Pushlinskaya',
      },
      {
        clientId: 2,
        restaurantId: 2,
        courierId: 2,
        products: JSON.stringify([
          { name: '12 Pc. Chicken Only', cost: 20.49 },
        ]),
        amount: 20.49,
        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryTime: 28,
        address: 'Genuezskaya',
      },
      {
        clientId: 3,
        restaurantId: 2,
        courierId: 2,
        products: JSON.stringify([
          { name: '12 Pc. Chicken Only', cost: 20.49 },
          { name: '8 Pc. Chicken Only', cost: 14.99 },
        ]),
        amount: 35.48,
        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryTime: 39,
        address: 'Genuezskaya',
      },
      {
        clientId: 4,
        restaurantId: 1,
        courierId: 2,
        products: JSON.stringify([{ name: 'McDouble', cost: 3.39 }]),
        amount: 3.39,
        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryTime: 31,
        address: 'Govorova',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
};
