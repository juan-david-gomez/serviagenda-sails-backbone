/**
* Usuarios.js
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
  		descripcion:'text',
  		email:'string',
  		usuario:'string',
  		clave:'string',
  		empresa:{
  			model: 'Empresas',
  		},
  		tipoUsuario:{
  			model: 'TiposUsuarios',
  		},
  		jornadas:{
            collection: 'Jornadas',
            via: 'usuario'
      	},
      	servicios: {
            collection: 'serviciosAsignados',
            via: 'usuario',
            // through: 'serviciosAsignados'
        }

  }
};

