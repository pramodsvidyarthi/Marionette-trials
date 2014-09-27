define(["app"],function(xcmheader){

	xcmheader.module("Models",function(Models,xcmheader,Backbone,Marionette,$,_){
		Models.taskmodel = Backbone.Model.extend({
			defaults:{
				name:"abc",
				age:25
			},
			initialize:function(){
				console.log("Task Model initialized");
			}
		});
	});

	return xcmheader.Models.taskmodel
});