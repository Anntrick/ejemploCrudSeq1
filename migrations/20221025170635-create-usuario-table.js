'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      mail: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull:false
      },
      foto: Sequelize.STRING,
      sexo: Sequelize.STRING,
      fecha_nacimiento: Sequelize.STRING,
      telefono: {
        type: Sequelize.STRING,
      },
      contrasena: Sequelize.STRING

    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
