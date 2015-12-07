require.config({
    baseUrl: '',
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
      views       : 'views/',
   },
});

requirejs(['views!app'],function(AppView){
  new AppView;
});




