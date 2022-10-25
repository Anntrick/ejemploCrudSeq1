const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Direccion extends Model {}
Direccion.init({
    id_direccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    calle: DataTypes.STRING,
    numero: DataTypes.STRING
}, {
    sequelize,
    modelName: "direccion",
    timestamps: false
})

module.exports = Direccion