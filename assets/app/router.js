
define(['backbone','views/CitasView'],function(backbone,citasView){

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      '': 'citas',
      'citas': 'citas',
      'negocio': 'negocio',
      'clientes': 'clientes',
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });
 
  var initialize = function(options){
    var router = new AppRouter(options);
    router.on('route:citas', function () {
      var citas = new citasView();
      citas.render();
    });
    router.on('route:negocio', function () {
      $("#app-content").html("Negocio");
    });
    router.on('route:clientes', function () {
      $("#app-content").html("Clientes");
    });
    router.on('route:defaultAction', function (actions) {
      //alert("La ruta no esta definida : "+actions);
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };

});