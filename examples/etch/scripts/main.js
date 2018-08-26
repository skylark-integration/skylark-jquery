require.config({
  baseUrl: "../scripts/"
  ,map: {
    '*': {
      'jquery': 'skylark-jquery/core'
  	}
  }
  , shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'etch': {
      deps: ['backbone'],
      exports: 'etch'
    }
  }
  ,packages : [
     { name: "skylark", location: "../../../lib/skylark" },
     { name: "skylark-jquery", location: "../../../src" }
  ]
  , paths: {
	'underscore' : "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min",
	'backbone' :  "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min",
    app         : ".."
    , collections : "../collections"
    , data        : "../data"
    , models      : "../models"
    , helper      : "../helper"
    , templates   : "../templates"
    , views       : "../views"
  }
});
 
// require(["module/name", ...], function(params){ ... });
require(["etch"], function () {
    var article = Backbone.Model.extend({
        defaults: {
            title: 'Default Title',
            body: 'Default body text'
        }
    });

    var articleView = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, 'save')
            this.model.bind('save', this.save);
        },

        events: {
            'mousedown .editable': 'editableClick'
        },

        editableClick: etch.editableInit,

        save: function() {

            // normally you would call model.save() here but this is a demo
            alert('Saved! Not really, this is just a demo.');
        }

    });

    $article = $('.article');
    var model = new article();
    var view = new articleView({model: model, el: $article[0], tagName: $article[0].tagName});
});