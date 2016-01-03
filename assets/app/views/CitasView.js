define(['backbone','text!templates/citas/calendar.html','moment'],function(backbone,calendarTemplate,moment){

	var CitasView = Backbone.View.extend({
		el:'#app-content',
		events: {
		 'click .day' : 'showAlert'

		},

		showAlert: function(){
			alert("You clicked me");
			return false;
		},
		initialize:function  () {
			
		},
		render:function(){

			this.$el.html($(calendarTemplate).html());
			//$(".day").on('click',this.showAlert);
			$('#calendar').fullCalendar();
			$('#calendarNav').datepicker({
			    language: "es",
			});
			$('#calendarNav').datepicker()
		    .on('changeDate', function(e) {
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