/**
 * EmpresasController
 *
 * @description :: Server-side logic for managing empresas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	data: function (req, res) {
		Empresas.find(function  (err,obj) {
			var data = obj;
			if (data)
				{

			console.log(data);
				};
    		return res.json(200, obj);
		})
  	},
};

