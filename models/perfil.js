const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Perfil extends Model {}
Perfil.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    seguidos: DataTypes.INTEGER,
    seguidores: DataTypes.INTEGER,
    biografia: DataTypes.TEXT,
}, {
    sequelize,
    modelName: "perfil",
    freezeTableName: true,
    timestamps: false
})

module.exports = Perfil