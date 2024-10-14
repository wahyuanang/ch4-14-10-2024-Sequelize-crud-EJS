'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Drivers", [
      {
        name: "Ferdi",
        license_number: 111,
        contact: 12345,
      },
      {
        name: "Nanda",
        license_number: 112,
        contact: 67890,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Drivers", null, {});
  }
};
