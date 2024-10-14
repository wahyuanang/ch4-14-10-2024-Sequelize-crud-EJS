"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Cars", [
            {
                model: "BMW",
                plate: "KT-8273-EG",
                type: "Sport",
                year: 2020,
            },
            {
                model: "Nissan",
                plate: "ER-8273-EG",
                type: "Sedan",
                year: 2022,
            },
            {
                model: "Mitsu",
                plate: "BR-7463-EG",
                type: "Truck",
                year: 2027,
            },
            {
                model: "Pickup",
                plate: "KT-8273-EG",
                type: "Truck",
                year: 2020,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Cars", null, {});
    },
};
