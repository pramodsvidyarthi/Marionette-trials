App.module("entities",function (entities,App,Backbone,Marionette,$,_) {
	App.entities.model = Backbone.Model.extend({
        defaults:{
            firstname:"dont",
            lastname:"know",
            number:12345
        }
    });

    App.entities.collection = Backbone.Collection.extend({
        url:"api",
        model:App.entities.model,
        // comparator:'id',
        // comparator:"firstname" //this property sorts the collection based on the attribute in this case firstname.
        comparator: function(abc) {
            return abc.get('firstname') + "" + abc.get('lastname');
        }   //sorting on firstname and if same then sorting based on lastname
    });

    var contacts;

    var initializeContact = function(){
    	contacts = new App.entities.collection();
        contacts.fetch();
        return contacts;
    };

    var api = {
    	getinitializedcontact:function(){	// checking if collection exists if not initializing.
    		if(contacts === undefined){		
    			initializeContact();
    		}
    		return contacts;
    	}
    };

    App.reqres.setHandler("contacts:entities",function(){	//passing the collection stored in contacts variable 
    	return api.getinitializedcontact();					//which is private to this module.exposing to 
    });														//marionette's requestresponse.
});

