
const express = require('express')
const router = express.Router();
const UsuariosRouter = require('./views/UserRoutes');


router.use('/usuario', UsuariosRouter);


//Export

module.exports = router;