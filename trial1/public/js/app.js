 var App = new Marionette.Application();
 
 App.addRegions({
        someregion: "#main-region"
 });

 App.on('start',function(){
 	if(Backbone.history){
 		Backbone.history.start();
 	}
 	console.log("App started...!!!");
 	// App.List.controller.listcontacts();
 });

 App.on('initialize:after',function(){
 	// console.log("App initialized...!!!");
 	// if(Backbone.history){
 	// 	Backbone.history.start();
 	// }
 });

 