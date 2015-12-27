define(['backbone','text!templates/citas/calendar.html'],function(backbone,calendarTemplate){

	var CitasView = Backbone.View.extend({
		el:'#app-content',
		render:function(){
			this.$el.html($(calendarTemplate).html());
			 $('#calendar').fullCalendar();
			 $('#calendarNav').fullCalendar();
		}
	});

	return CitasView;
});