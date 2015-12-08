/**
* Empresas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  autoCreatedAt: true,
  autoUpdatedAt: true,
  attributes: {
  		id:{
  			type:'integer',
  			primaryKey: true,
  			autoIncrement: true,
  		},
  		nombre:'string',
  		direccion:'string',
  }
};



