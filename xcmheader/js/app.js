
define(["marionette"],function(Marionette){
	// var App = new Marionette.Application();
	var App = Marionette.Application.extend({
		// initialize:function(){
		// 	console.log("Marionette Application initialized");
		// },

		onStart:function(){
			console.log("App started");
		},

		regions:{
			header:'#head'
		},

		 onBeforeStart:function(){
			console.log("Before start of app");
		},

		onAfterStart:function(){
			console.log("After start of app");
		},

		onInitializeBefore:function(){
			console.log("After initialization of app");
		}

	});

	//can be done either ways but listening to few evnts in one way and a few in another way, not clear of it yet


	var XCMheader = new App();

	// App.on('before:start',function(){
	// 	console.log("Before initialization of app");
	// });

	// App.on('initialize:after',function(){
	// 	console.log("After initialization of app");
	// });

	// App.on('start',function(){
	// 	console.log("started");
	// });

	// App.addRegions({
	// 	header:'#head'
	// })
	
	return XCMheader;
})
