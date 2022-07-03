const Persona={};

//metodo "saludar" de la clase persona para probar
/*Persona.saludar=(req,res)=>{
    res.send("hoola mundo");
};*/

//metodo listar
Persona.listar =(req,res)=>{
    //crear l conexi�n a una tabla de la BD para hacer una consulta
	req.getConnection((err,conn)=>{
	   conn.query('SELECT * FROM persona', (err, rows)=>{
	       if(err){
		       console.log("error");
		      res.json(err);
		   }else{
		        console.log("succes");
		       console.log(rows);
         //para renderizar la vista ViewsPersona
				 res.render('ViewsPersona',{
					 data: rows
				 });
		   }
	   });
	});
};

Persona.insertar =(req,res)=>{
    //crear l conexi�n a una tabla de la BD para hacer una consulta
	const datos=req.body;
	const datos1=[datos.nombrePersona, datos.edadPersona];
	console.log(datos);
	console.log(datos1);
	req.getConnection((err,conn)=>{
		 conn.query('INSERT INTO persona set id=?,nombre=?,edad=?', ["",datos.nombrePersona, datos.edadPersona],(err, rows)=>{
				 if(err){
					 console.log("error");
					res.json(err);
			 }else{
						console.log("succes");
					 console.log(rows);

				}
		 });
	});
	res.redirect('/');
};

Persona.eliminar =(req,res)=>{
    //crear l conexi�n a una tabla de la BD para hacer una consulta
//console.log(req.params.id);
//res.send('works');
const id = req.params.id;
req.getConnection((err,conn)=>{
	 conn.query('DELETE FROM persona WHERE id=?', [id],(err, rows)=>{
			 if(err){
				 console.log("error");
				res.json(err);
		 }else{
					console.log("succes");
				 console.log(rows);

			}
	 });
});
res.redirect('/');
};

Persona.actualizar =(req,res)=>{
    //crear l conexi�n a una tabla de la BD para hacer una consulta
//console.log(req.params.id);
//res.send('works');
const id = req.params.id;
req.getConnection((err,conn)=>{
	 conn.query('SELECT * FROM persona WHERE id=?', [id],(err, rows)=>{
			 if(err){
				 console.log("error");
				res.json(err);
		 }else{
					console.log("succes");
					//const aa=rows[0].id;
				 //console.log(aa);
         res.render('actualizar', { data: rows });
			}
	 });
});

};

Persona.update =(req,res)=>{
    //crear l conexi�n a una tabla de la BD para hacer una consulta
//console.log(req.params.id);
//res.send('works');
const id = req.params.id;
const newPersona = req.body;
//console.log(newPersona.ActualizarNombrePersona);
//const datos_persona={ newPersona.ActualizarNombrePersona, newPersona.ActualizarEdadPersona};
console.log("es aqui");
req.getConnection((err,conn)=>{
	 conn.query('UPDATE persona SET nombre=?,edad=? WHERE id=?', [newPersona.ActualizarNombrePersona, newPersona.ActualizarEdadPersona, id],(err, rows)=>{
			 if(err){
				 console.log("error");
				res.json(err);
		 }else{
					console.log("succes");
				 console.log(rows);
         //res.render('ViewsPersona');
				 res.redirect('/');
			}
	 });
});

};


module.exports = Persona;
