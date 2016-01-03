var urlIndex = "app/";
require.config({
    baseUrl: urlIndex,
    shim: {
      underscore: {
        exports: '_'
      },
      bootstrap:{
        deps: [
          'jquery'
        ],
        exports:'bootstrap',
      },
      bootstrapM:{
        deps: [
          'bootstrap',
          'bootstrapR'
        ],
        exports:'bootstrapM',
      },
      bootstrapR:{
        deps: [
          'jquery',
        ],
        exports:'bootstrapR',
      },
      backbone: {
        deps: [
          'underscore',
          'jquery'
        ],
        exports: 'Backbone'
      },
      fullcalendarEs: {
        deps: [
          'moment',
          'jquery',
          'fullcalendar',
        ],
        exports: 'fullcalendarEs'
      },
      datepicker: {
        deps: [
          'jquery',
          'bootstrap',
        ],
        exports: 'datepicker'
      },
      datepickerEs: {
        deps:[
          'datepicker'
        ],
        exports: 'datepickerEs'
      }
      
    },
    paths : {
      backbone        : 'libs/backbone/backbone',
      underscore      : 'libs/underscore/underscore',
      jquery          : 'libs/jquery/dist/jquery',
      bootstrap       : 'libs/bootstrap/dist/js/bootstrap',
      bootstrapM      : 'libs/bootstrap-material-design/dist/js/material',
      bootstrapR      : 'libs/bootstrap-material-design/dist/js/ripples',
      fullcalendar    : 'libs/fullcalendar/dist/fullcalendar',
      fullcalendarEs  : 'libs/fullcalendar/dist/lang/es',
      moment          : 'libs/moment/moment',
      text            : 'libs/text/text',
      datepicker      : 'libs/bootstrap-datepicker/dist/js/bootstrap-datepicker',
      datepickerEs    : 'libs/bootstrap-datepicker/dist/locales/bootstrap-datepicker.es.min',
   },
});

requirejs(['router','bootstrapM','jquery','fullcalendarEs','datepickerEs'],function(Router,bootstrapM,$){
  $.material.init();
  Router.initialize();
});




