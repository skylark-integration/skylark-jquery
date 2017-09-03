require.config({
  baseUrl: "assets/js/lib/"
  ,map: {
    '*': {
      'jquery': 'skylark/query'
  	}
  }
  , shim: {
    'backbone': {
      deps: ['underscore', 'skylark/query'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'bootstrap': {
      deps: ['skylark/query'],
      exports: '$.fn.popover'
    }
  }
  ,packages : [
     { name: "skylark", location: "../../../../../../src/skylark" }
  ]
  , paths: {
    app         : ".."
    , collections : "../collections"
    , data        : "../data"
    , models      : "../models"
    , helper      : "../helper"
    , templates   : "../templates"
    , views       : "../views"
  }
});
require([ 'app/app'], function(app){
  app.initialize();
});
