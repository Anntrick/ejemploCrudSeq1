const express = require('express');
const app = express();
const PORT = 3000;
const sequelize = require('./db/db')
const db = require('./db/db')
const router = require('./router');
require('./models/associations');


//Middlewares
app.use(express.json());

app.use(router)



app.listen(PORT, ()=> {
    console.log(`La app ha arrancado en http://localhost:${PORT}`)

    sequelize.sync({force: false}).then(()=> {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
})