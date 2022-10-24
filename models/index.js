const Usuario = require('./usuario')
const Perfil = require('./perfil')


Perfil.belongsTo(Usuario)

Usuario.hasMany(Perfil)