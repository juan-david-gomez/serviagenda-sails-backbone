/**
* ServiciosAsignados.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	
  attributes: {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: 'integer'
    },
    usuario:{
		model: 'Usuarios',
	},
	servicio:{
		model: 'Servicios',
	},
    // usuario: {
    //   type: 'integer',
    //   foreignKey: true,
    //   references: 'Usuarios',
    //   on: 'id',
    //   via: 'usuario',
    //   // groupBy: 'usuario'
    // },
    // servicio: {
    //   type: 'integer',
    //   foreignKey: true,
    //   references: 'Servicios',
    //   on: 'id',
    //   via: 'servicio',
    //   // groupBy: 'servicio'
    // }
  }
};

