define(['app'],function(xcmheader){
	xcmheader.module("Views",function(Views,xcmheader,Backbone,Marionette,$,_){
		Views.headerview = Marionette.ItemView.extend({
			template:'#header-tmpl'
		});
	});

	return xcmheader.Views.headerview;
});