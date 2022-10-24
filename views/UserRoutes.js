
const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario')



router.get('/show_users', async (req, res) => {
    try{
        let data = await Usuario.findAll()    
        res.send(data)
    } catch(e){
        res.send(e)
    }

    // sequelize.query('SELECT * FROM usuario').then(user => {
    //     res.send(user);
    //     });
})

router.post('/register', (req, res) => {
    let data = req.body
    Usuario.create({
        mail: data.mail,
        foto: data.foto,
        sexo: data.sexo,
        fecha_nacimiento: data.fecha_nacimiento,
        telefono: data.telefono,
        contrasena: data.contrasena
    }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err)
    })
})

router.put('/modify', (req, res) => {
    let data = req.body
    Usuario.update({
         foto: data.foto,
        sexo: data.sexo,
        fecha_nacimiento: data.fecha_nacimiento,
        telefono: data.telefono,
        contrasena: data.contrasena
    },
    {
        where: { mail: data.mail }
    }).then(result => {
        res.send(result)
    })
})

router.delete('/delete_user/:mail', (req, res) => {
    let mail = req.params.mail
   
    Usuario.destroy({
        where: {mail: mail}
    }).then(deleted => {
        res.send(`El usuario ha sido eliminado`)
    })
})


module.exports = router