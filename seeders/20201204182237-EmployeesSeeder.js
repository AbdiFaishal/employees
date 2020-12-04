'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Employees',
      [
        {
          name: 'Abdi Faishal',
          phone_number: '081388240064',
          jobtitle: 'Fullstack Developer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ridho',
          phone_number: '082110627479',
          jobtitle: 'Engineer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Employees', null, {});
  },
};
