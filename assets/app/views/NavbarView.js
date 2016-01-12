define(['backbone','text!templates/navbar/navbar.html'],function(backbone,navbarTemplate){

	var NavbarView = Backbone.View.extend({
		el:'#navbar',
		events: {
		 //'click .day' : 'showAlert'

		},
		initialize:function  () {
			
		},

		render:function(){

			this.$el.html($(navbarTemplate).html());

		}
	});

	return NavbarView;
});