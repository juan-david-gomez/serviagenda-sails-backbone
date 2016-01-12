
define(['backbone','views/CitasView','views/NavbarView'],function(backbone,citasView,navbarView){

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      '': 'inicio',
      'citas': 'citas',
      'negocio': 'negocio',
      'clientes': 'clientes',
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });
  
  var cargarNavbar = function  (options) {
      var navbar = new navbarView();
      navbar.render();
      $.material.init();
  }
  var initialize = function(options){
    var router = new AppRouter(options);
    router.on('route:inicio', function () {
      cargarNavbar();
      // router.navigate("citas", {trigger: true});
    });
    router.on('route:citas', function () {
      cargarNavbar();
      var citas = new citasView();
      citas.render();
    });
    router.on('route:negocio', function () {
      cargarNavbar();
      $("#app-content").html("Negocio");
    });
    router.on('route:clientes', function () {
      cargarNavbar();
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