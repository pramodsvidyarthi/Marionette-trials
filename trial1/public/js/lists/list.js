App.module("List",function(List,App,Backbone,Marionette,$,_){
	List.contact = Marionette.ItemView.extend({
        tagName:'tr',
        template: "#static-template",
        events:{
            "click":"highlight",
            "click button.js-remove":"deletemodel",
            "click button.js-edit":"editing"
        },
        highlight:function(e){
        //alert(this.model.escape('number'));//escape and get are the same both returns the value of an attribute
            e.preventDefault();
            this.$el.toggleClass("warning");
        },
        showdetails:function(e){
            e.stopPropagation(); //evn-propogation or bubbling from inside to outer elements, we are preventing it.
            alert(this.model.get('firstname'));
        },

        deletemodel:function(e){
            e.stopPropagation();
            // this.model.collection.remove(this.model); //one way or removing and updating view.
            this.trigger("contacts:delete",this.model); //raising evnt passing to controller he will handle.
            // console.log(App.request("contacts:entities"));
        },

        editing:function(e){
            e.stopPropagation();
            // confirm("do u wanna edit");
            this.trigger("contacts:edit",this.model);
            // console.log(this.model);
        },

        remove:function(){
            // this.$el.fadeOut();
            // this.$el.remove();
            var self = this;
            this.$el.animate({  borderSpacing: -360 }, {
                step: function(now,fx) {
                $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                $(this).css('-moz-transform','rotate('+now+'deg)');
                $(this).css('transform','rotate('+now+'deg)');
                }, duration:'slow'},'linear').fadeOut(function(){
                    Marionette.ItemView.prototype.remove.call(self); // or can also use this.$el.remove
                });
        }

    });

    List.contacts = Marionette.CompositeView.extend({
        tagName:'table',
        template:'#contact-list',
        className: "table table-hover",
        childView:App.List.contact,    //childView is the name of the property not itemView. 
        childViewContainer:'tbody',
        onChildviewContactsDelete: function(){  //listener in collection for childview events with event name
         this.$el.fadeOut(1000, function(){
         $(this).fadeIn(1000);
         });
     }
    });
});