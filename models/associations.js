const Usuario = require('./usuario')
const Perfil = require('./perfil')
const Comentario = require('./comentario')
const Publicacion = require('./publicacion')
const Direccion = require('./direccion')
const Rol = require('./rol')


Direccion.hasOne(Usuario)
Usuario.belongsTo(Direccion)

Perfil.belongsTo(Usuario)
Usuario.hasMany(Perfil)

Perfil.hasMany(Comentario)
Comentario.belongsTo(Perfil)

Publicacion.hasMany(Comentario)
Comentario.belongsTo(Publicacion)

Usuario.belongsToMany(Rol, { through: "usuarios-roles" })
Rol.belongsToMany(Usuario, { through: "usuarios-roles" })
