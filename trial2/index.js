// Layout
var Layout = Backbone.Marionette.LayoutView.extend({
  template: '#layout-template',
  // define regions
  regions: {
    header: '.header',
    content: '.content'
  }
});

var layout = new Layout();

// Home view
var Home = Backbone.Marionette.ItemView.extend({
  template: '#home-template',
});

// About view
var About = Backbone.Marionette.ItemView.extend({
  template: '#about-template',
});

// Header view
var Header = Backbone.Marionette.ItemView.extend({
  template: '#header-template',
  // bind DOM events
  events: {
    'click .home': 'home',
    'click .about': 'about',
  },
  home: function(){
    // show Home View in the content region
    layout.content.show(new Home());
  },
  about: function(){
    // show About View in the content region
    layout.content.show(new About());
  }
});



$(function() {
  // Render and append the layout
  $('body').append(layout.render().el);
  // Show inner view
  layout.header.show(new Header());
  layout.content.show(new Home());
});