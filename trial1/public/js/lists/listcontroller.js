App.module("List",function (List,App,Backbone,Marionette,$,_) {
	List.controller = {
		listcontacts:function() {
			var contactscol = App.request("contacts:entities");
			var contactslist = new List.contacts({ collection:contactscol });

			contactslist.on("childview:contacts:delete",function(childView,model){  //childview is the property
				contactscol.remove(model);								//in composite-view but whereas here
			 // alert("i was cald");									//we sud use lowercase i.e childview
			 console.log(contactscol);									//not childView...else it wont bind
			 });																//the event. 

			 contactslist.on("childview:contacts:edit",function(childview,model){
			 	var a = model.get('id');
			 	alert(a);
			 });																														

			App.someregion.show(contactslist);
		}
	}
})