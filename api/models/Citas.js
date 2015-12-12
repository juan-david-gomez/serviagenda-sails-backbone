/**
* Citas.js
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
  		fecha:'datatime',
  		hora:'string',
  		duracion:'integer',
  		usuario:{
            model: 'Usuarios',
      	},
      	empresa:{
            model: 'Empresas',
      	},
      	cliente:{
            model: 'Clientes',
      	},
      	servicio:{
            model: 'Servicios',
      	},
      	// estado:{
       //      model: 'Estados',
      	// }
  }
};

