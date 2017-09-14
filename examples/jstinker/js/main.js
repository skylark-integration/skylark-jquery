require.config({
  baseUrl: "./js/"
  ,map: {
    '*': {
      'jquery': 'skylark-jquery/core'
  	}
  }
  , shim: {
    'aes': {
      deps: ['skylark/query'],
      exports: 'aes'
    },
    'bootstrap': {
      deps: ['skylark/query'],
      exports: 'bootstrap'
    },
    'togetherjs': {
      deps: ['skylark/query'],
      exports: 'togetherjs'
    },
    'ext-language_tools': {
      deps: ['ace'],
      exports: 'ext-language_tools'
    },
    'jstinker': {
      deps: ['jquery','bootstrap','togetherjs','aes','beautify-html','beautify-css','beautify','ace','ext-language_tools'],
      exports: 'jstinker'
    }
  }
  ,packages : [
     { name: "skylark", location: "../../../lib/skylark" },
     { name: "skylark-jquery", location: "../../../src/skylark-jquery" }
  ]
  , paths: {
	 'bootstrap' : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min",
   'togetherjs' : "https://togetherjs.com/togetherjs-min",
   'aes' : "https://cdnjs.cloudflare.com/ajax/libs/aes-js/3.1.0/index.min",
   'beautify-html' : "./beautify-web/beautify-html",
   'beautify-css' : "./beautify-web/beautify-css",
   'beautify' : "./beautify-web/beautify",
   'ace' : "./ace/ace",
   'ext-language_tools' : "./ace/ext-language_tools",

	 'jstinker' :  "./jstinker",
    app         : ".."
  }
});
 
// require(["module/name", ...], function(params){ ... });
require(["jstinker"], function () {
        ace.require("ace/ext/language_tools");

        var htmlEditor = ace.edit("html-editor");
        htmlEditor.setTheme("ace/theme/crimson-editor");
        htmlEditor.getSession().setMode("ace/mode/html");
        htmlEditor.setOptions({
            enableBasicAutocompletion: true
        });

        var cssEditor = ace.edit("css-editor");
        cssEditor.setTheme("ace/theme/crimson-editor");
        cssEditor.getSession().setMode("ace/mode/css");
        cssEditor.setOptions({
            enableBasicAutocompletion: true
        });

        var jsEditor = ace.edit("js-editor");
        jsEditor.setTheme("ace/theme/crimson-editor");
        jsEditor.getSession().setMode("ace/mode/javascript");
        jsEditor.setOptions({
            enableBasicAutocompletion: true
        });

});