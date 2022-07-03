const expres =require('express');
const routers =expres.Router();
const personaController =require('../controllers/PersonaController');
/*
routers.get('/',(req,res)=>{
    res.send("hoola mundo");
});*/

//routers.get('/',personaController.saludar);
routers.get('/',personaController.listar);
routers.post('/',personaController.insertar);
routers.get('/eliminar/:id',personaController.eliminar);
//para seleccionar el dato que quiero actualizar y llenar el formulario de actualizacion
routers.get('/actualizar/:id',personaController.actualizar);
//para actualizar el dato seleccionado
routers.post('/actualizar/:id',personaController.update);


module.exports = routers;
