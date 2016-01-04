define(['backbone','text!templates/citas/calendar.html','moment'],function(backbone,calendarTemplate,moment){

	var CitasView = Backbone.View.extend({
		el:'#app-content',
		events: {
		 //'click .day' : 'showAlert'

		},
		initialize:function  () {
			
		},

		render:function(){

			this.$el.html($(calendarTemplate).html());
			this.configCalendar();
			this.eventsCalendar();
		},

		//Metodos personalizados
		configCalendar: function  () {
			$('#calendar').fullCalendar();
			$('#calendarNav').datepicker({
			    language: "es",
			});
			this.hoverWeekDatepicker();
		},
		hoverWeekDatepicker:function(){
			/*Config Week Styles datepicker*/
			var tr = $('body').find('.datepicker-days table tbody tr');
		    tr.on("mouseover",function(){
		        $(this).addClass('week');
		    });
		    tr.on("mouseout",function(){
		        $(this).removeClass('week');
		    });	

		    $('body').find('.datepicker-days table tbody tr').removeClass('week-active');

		    // add active class
		    var tr = $('body').find('.datepicker-days table tbody tr td.active.day').parent();
		    tr.addClass('week-active');
		},
		eventsCalendar:function(){
			var self = this;
			$('#calendarNav').datepicker().on('changeDate', function(e) {

				self.hoverWeekDatepicker();
		        var dateObject = e.date;
			    var dateArray = dateObject.toLocaleString('es',{hour12:false}).split(" ");
			    var dateString = dateArray[0];
			    var firstDate = moment(dateString, "DD/MM/YYYY").day(0).format("MM-DD-YYYY");
			    var lastDate =  moment(dateString, "DD/MM/YYYY").day(6).format("MM-DD-YYYY");
			    console.log(firstDate);
			    console.log(lastDate);
		    });	
		}
	});

	return CitasView;
});