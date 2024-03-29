/**
* Clientes.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		id:{
  			type:'integer',
  			primaryKey: true,
  			autoIncrement: true,
  		},
  		nombre:'string',
  		telefono:'string',
  		direccion:'string',
  		fechaNacido:'datetime',
  		genero: {
		    type: 'string',
		    enum: ['D','M','F'],
		},
  		email:'string',
  		citas:{
            model: 'Citas',
      	}
  }
};

