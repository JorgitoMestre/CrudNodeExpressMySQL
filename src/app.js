const expres =require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = new expres();

//server.get('/',function(req,res){
  // re.send("EXPRESS Y NODEJS");
   //res.end();
//});

//********importando las rutas
const rutaPersona=require('./routes/persona');


// *************** ajustes**********
// si hay algun puerto disponible en el SO lo asigna,
//si no coge por defecto el puerto 3000
app.set('port', process.env.PORT || 3000);

//para configurar las vistas y establecer el otor de plantillas
app.set('view engine','ejs');
//especific a la ruta donde se encuentran las vistas  del proyecto
//argumentos de la funcion: nombre de la carpeta,  direccion de donde se encuentra usando el metodo join del modulo path y la variable__dirname para coger la raiz de
//donde se encuentra el fichero q ejecuta el join, es decir el fichero app.js,  wiews nombre de la carpete con la q se va a concatenar la direccion es decir esta linea lo que hace es crear la direcc
//de la carpeta dir ejemplo:  E:\Jorgito\Node JS\NodeMySQL_Example\src\views
app.set('views',path.join(__dirname, 'views'));

//midelwares (funciones que se ejecutan antes de que se realicen las peticiones al servidor)
app.use(morgan('dev'));
//crear conexion a BD
app.use(myConnection(mysql, {
    host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'persona'
}, 'single'));
//para recibir datos de los formularios de las vistas a travesdel objeto body
//la propiedad false es porque no va a enviar imagenes ni datos codificados
app.use(expres.urlencoded({extend: false}));

//routers (peticiones al servidor: ejemplo /usuarios � /servidores, etc)
app.use('/',rutaPersona);



//static file
app.use(expres.static(path.join(__dirname, 'public')));


//  creando el server
app.listen(app.get('port'),function(){
   console.log("Servidor corriendo con EXPRESS y NODEJS");
});
/*app.listen(3000,function(){
   console.log("Servidor corriendo con EXPRESS y NODEJS");
});*/
