//Se suele hacer con el model que directamente te genera model y migration
//npx sequelize-cli model:generate --name nombre --atributes attr1:string,attr2:text
//Pero se puede generar el migration solo con
//npx sequelize-cli migration:generate --name create-usuario-table

//npx sequelize-cli db:migrate
//npx sequelize-cli db:migrate:undo:all para deshacer
// npx sequelize-cli db:migrate --url 'mysql://root:root@localhost:3307/twitter'                                                                                                                                                                                                                                       


'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.STRING
      },
      rol: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      //nos lo genera pero lo borramos
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clientes');
  }
};