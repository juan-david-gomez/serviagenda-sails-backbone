var urlIndex = "app/";
require.config({
    baseUrl: urlIndex,
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: [
          'underscore',
          'jquery'
        ],
        exports: 'Backbone'
      }
    },
    paths : {
      backbone    : 'libs/backbone/backbone',
      underscore  : 'libs/underscore/underscore',
      jquery      : 'libs/jquery/dist/jquery',
   },
});

requirejs(['router'],function(Router){
  Router.initialize();
});




