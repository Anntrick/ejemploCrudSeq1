module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([

        // Para crear el campo city
        queryInterface.addColumn('rol', 'color', {
          type: Sequelize.STRING,
          defaultValue: "Verde"
        }, { transaction: t }),

      ])
    })
  },

  down: (queryInterface, Sequelize) => {
   
  }
};