const Direccion = require('../models/direccion')
const Usuario = require('../models/usuario')

const UserController = {}

UserController.getUsers = async (req, res) => {
    try{
        let data = await Usuario.findAll({
            include: {
                model: Direccion,
                attributes: ['calle', 'numero']
            },
            attributes: ['mail', 'fecha_nacimiento']
        })    
        res.send(data)
    } catch(e){
        res.send(e)
    }
}

module.exports = UserController