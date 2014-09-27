var App =  Marionette.Application.extend({
	initialize:function(){
		console.log("App initialized");
	}
	});

var Task = new App();

Task.addRegions({
	header:'#head',
	hamburger:'#hamburger'
});

Task.model = Backbone.Model.extend();
var pqr = new Task.model({
	names:{
	"Tasks assigned tome":"hehee",
	"unassigned bos":"",
	"extensions assigned to me":"",
	"Admin Bra":"",
	"Admin Bos":"",
	"extensions tasks bra":"",
	"extensions tasks bos":"",
	"task category":"",
	"financial category":"",
	"book-keeping category":"",
	"other category":"",
}
})

Task.headregion = Marionette.ItemView.extend({
	template:'#header-tmpl',
	model:pqr,
	events:{
		'click .js-menu-trigger ':'dothis',
		'click .js-menu-screen':'thendothis',
	},

	dothis:function(e){
		console.log("will make a call to show the hamburger menu");
		this.trigger('show:hamburger');
	},

	thendothis:function(e){
		console.log("will make a call to hide the hamburger menu");
		this.trigger('hide:hamburger');
	}

	
});

Task.navregion = Marionette.ItemView.extend({
	model:pqr,
	template:'#nav-tmpl',
	events:{
		'click li':'display'
	},
	show:function(){
		 $('.js-menu').toggleClass('is-visible');
		 $('.js-menu-screen').toggleClass('is-visible');
	},
	hide:function(){
		 $('.js-menu').toggleClass('is-visible');
   		 $('.js-menu-screen').toggleClass('is-visible');
	},

	display:function(){
		console.log("yo man wassup...!!!");
	}
});

Task.on('start',function(){
	var headview = new Task.headregion();
	headview.on('show:hamburger',function(){
	var navview = new Task.navregion();
	navview.show();
	Task.hamburger.show(navview);
});
	headview.on('hide:hamburger',function(){
		var navview = new Task.navregion();
		navview.hide();
	});

	Task.header.show(headview);
});

Task.start();
