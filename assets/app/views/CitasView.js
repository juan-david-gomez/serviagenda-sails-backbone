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
		//Propiedades Personalizadas
		viewCalendar:"",
		//Metodos personalizados
		configCalendar: function  () {
			var citas = [
					{
						title: 'All Day Event',
						start: '2015-12-01'
					},
					{
						title: 'Long Event',
						start: '2015-12-07',
						end: '2015-12-10'
					},
					{
						id: 999,
						title: 'Repeating Event',
						start: '2015-12-09T16:00:00'
					},
					{
						id: 999,
						title: 'Repeating Event',
						start: '2015-12-16T16:00:00'
					},
					{
						title: 'Conference',
						start: '2015-12-11',
						end: '2015-12-13'
					},
					{
						title: 'Meeting',
						start: '2015-12-12T10:30:00',
						end: '2015-12-12T12:30:00'
					},
					{
						title: 'Lunch',
						start: '2015-12-12T12:00:00'
					},
					{
						title: 'Meeting',
						start: '2015-12-12T14:30:00'
					},
					{
						title: 'Happy Hour',
						start: '2015-12-12T17:30:00'
					},
					{
						title: 'Dinner',
						start: '2015-12-12T20:00:00'
					},
					{
						title: 'Birthday Party',
						start: '2015-12-13T07:00:00'
					},
					{
						title: 'Click for Google',
						url: 'http://google.com/',
						start: '2015-12-28'
					}
				];
			var self = this;
			$('#calendar').fullCalendar({
				header: {
					left: 'prev,today,next',
					center: 'title',
					right: 'agenda,agendaWeek,agendaDay',
				},
				lang:"es",
				height: 500,
				axisFormat: 'h(:mm) a',
				timeFormat: 'h(:mm) a',
				defaultView: 'agendaWeek',
				editable: true,
				events:citas,
				viewRender:function  (view, element) {
					var viewName = view.name;
					self.viewCalendar = viewName;
					self.ConfigDatepicker();

				}


			});
			$('#calendarNav').datepicker({
			    language: "es",
			});
			this.ConfigDatepicker();
		},
		ConfigDatepicker:function(){
			var tr = $('body').find('.datepicker-days table tbody tr');
			var trActive = $('body').find('.datepicker-days table tbody tr td.active.day').parent();
			if (this.viewCalendar=="agendaWeek") {
				/*Config Week Styles datepicker*/
			    tr.on("mouseover",function(){
			        $(this).addClass('week');
			    });
			    tr.on("mouseout",function(){
			        $(this).removeClass('week');
			    });	

			    $('body').find('.datepicker-days table tbody tr').removeClass('week-active');

			    // add active class
			    trActive.addClass('week-active');
			}else{
				tr.unbind("mouseover");
				tr.unbind("mouseout");
				tr.removeClass('week');

				trActive.removeClass('week-active');
			}
		    
		},
		eventsCalendar:function(){
			var self = this;
			$('#calendarNav').datepicker().on('changeDate', function(e) {

				self.ConfigDatepicker();
			    // $('#calendar').fullCalendar( 'changeView', 'agendaWeek');
			    $('#calendar').fullCalendar( 'gotoDate', e.date );

			    var calendar = $('#calendar').fullCalendar('getCalendar');
		        var view = calendar.view;
		        var start = view.start._d;
		        var end = view.end.subtract(1, 'days')._d;
		        var dates = { start: start, end: end };
		        console.log(dates) ;

		    });	
		}
	});

	return CitasView;
});