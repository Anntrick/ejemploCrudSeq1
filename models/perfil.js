const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Perfil extends Model {}
Perfil.init({
    usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    seguidos: DataTypes.INTEGER,
    seguidores: DataTypes.INTEGER,
    biografia: DataTypes.TEXT,
    mail_user: DataTypes.STRING
}, {
    sequelize,
    modelName: "perfil",
    freezeTableName: true,
    timestamps: false
})

module.exports = Perfil