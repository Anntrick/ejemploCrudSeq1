const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Usuario extends Model {}
Usuario.init({
    mail: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
            isEmail: true
        }
    },
    foto: DataTypes.STRING,
    sexo: DataTypes.STRING,
    fecha_nacimiento: DataTypes.STRING,
    telefono: {
        type: DataTypes.STRING,
        validate: {
            len: 9
        }
    },
    contrasena: DataTypes.STRING
}, {
    sequelize,
    modelName: "usuario",
     //para que conserve el nombre en vez de ponerlo en plural
    freezeTableName: true,
    //Para que no genere el createAt y ModifiedAt
    timestamps: false
})

module.exports = Usuario