App.module("List",function(List,App,Backbone,Marionette,$,_){
	List.Myroutes =  Marionette.AppRouter.extend({
		appRoutes:{
			"contacts":"listcontacts",
			"showmessage":"showingmessage",
			"nice":"niceone"
		}
	});
	var API = {
		listcontacts:function(){
			console.log("the app router was initialized");
			App.List.controller.listcontacts();
		},
		showingmessage:function(){
			console.log("Holy god this works jus fine...blowing my brains out..!!!");
		},
		niceone:function(){
			alert("woah dude u rock...!!!");
		}
	};
	App.addInitializer(function(){
		 new List.Myroutes({
			controller:API
		});
	});
});