"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Users", [
            {
                firstName: "John",
                lastName: "Doe",
                age: 20,
                phoneNumber: "08781638812",
            },
            {
                firstName: "Harry",
                lastName: "Doe",
                age: 34,
                phoneNumber: "082323878812",
            },
            {
                firstName: "John",
                lastName: "Levi",
                age: 20,
                phoneNumber: "08927239233",
            },
            {
                firstName: "Aditama",
                lastName: "Rahman",
                age: 20,
                phoneNumber: "087287638812",
            },
            {
                firstName: "Alif",
                lastName: "Rahman",
                age: 30,
                phoneNumber: "087287638452",
            },
            {
                firstName: "Iqmal",
                lastName: "Ramadhan",
                age: 21,
                phoneNumber: "087245638812",
            },
            {
                firstName: "Bastrian",
                lastName: "Rahman",
                age: 20,
                phoneNumber: "0872876383712",
            },
            {
                firstName: "Peli",
                lastName: "Saru",
                age: 20,
                phoneNumber: "0872876384729",
            },
            {
                firstName: "Alif",
                lastName: "Poli",
                age: 20,
                phoneNumber: "087287638812",
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Users", null, {});
    },
};
