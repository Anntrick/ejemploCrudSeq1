'use strict'
//npx sequelize-cli seed:generate --name create-direccion
//npx sequelize-cli db:seed:all
module.exports = {
    //Se ejecuta cuando lanzamos el seeder
    up: async (queryInterface, Sequelize) => {
        let direcciones = [
            { calle: "falsa", numero: "123" },
            { calle: "olvido", numero: "5"  },
            { calle: "Aguacate", numero: "25" },
            { calle: "Alameda", numero: "85" }
        ]
        await queryInterface.bulkInsert('direccions', direcciones, {}) 
    },
    //cuando se deshace el seeder
    down: () => {

    }
}