
define(['backbone'],function(){

var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      '': 'home',
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });
 
  var initialize = function(options){
    var router = new AppRouter(options);
    router.on('route:home', function () {
      alert("Bienvenido");
    });
    router.on('route:defaultAction', function (actions) {
      alert("La ruta no esta definida : "+actions);
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };

});