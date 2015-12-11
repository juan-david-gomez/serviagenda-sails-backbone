/**
* Jornadas.js
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
  		usuario:{
  			model: 'Usuarios',
  		},
  		dia: {
		    type: 'string',
		    enum: ['L','M','W','J','V','S','D'],
		},
  		horaInicio:'string',
  		horaFin:'string',
  }
};

