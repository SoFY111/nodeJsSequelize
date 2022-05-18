'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   
    return await queryInterface.bulkInsert("Users", [
      {
        firstName: "Kobe",
        lastName: "Bryant",
        email:"kobe@bryant.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Shaq",
        lastName: "Diesel",
        email:"shaq@diesel.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Tim",
        lastName: "Brown",
        email:"tim@brown.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Hakan",
        lastName: "Yol",
        email:"hakan@yol.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return await queryInterface.bulkDelete('Users', null, {});
  }
};
