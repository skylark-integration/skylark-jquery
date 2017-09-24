/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.3
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./core"],function(e){function n(r){var i=[["resolve","done",e.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",e.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",e.Callbacks({memory:1})]],t="pending",o={state:function(){return t},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var r=arguments;return n(function(n){e.each(i,function(i,t){var c=e.isFunction(r[i])&&r[i];s[t[1]](function(){var r=c&&c.apply(this,arguments);if(r&&e.isFunction(r.promise))r.promise().done(n.resolve).fail(n.reject).progress(n.notify);else{var i=this===o?n.promise():this,s=c?[r]:arguments;n[t[0]+"With"](i,s)}})}),r=null}).promise()},promise:function(n){return null!=n?e.extend(n,o):o}},s={};return e.each(i,function(e,n){var r=n[2],c=n[3];o[n[1]]=r.add,c&&r.add(function(){t=c},i[1^e][2].disable,i[2][2].lock),s[n[0]]=function(){return s[n[0]+"With"](this===s?o:this,arguments),this},s[n[0]+"With"]=r.fireWith}),o.promise(s),r&&r.call(s,s),s}var r=Array.prototype.slice;return e.when=function(i){var t,o,s,c=r.call(arguments),a=c.length,l=0,u=1!==a||i&&e.isFunction(i.promise)?a:0,f=1===u?i:n(),h=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?r.call(arguments):o,i===t?f.notifyWith(n,i):--u||f.resolveWith(n,i)}};if(a>1)for(t=new Array(a),o=new Array(a),s=new Array(a);l<a;++l)c[l]&&e.isFunction(c[l].promise)?c[l].promise().done(h(l,s,c)).fail(f.reject).progress(h(l,o,t)):--u;return u||f.resolveWith(s,c),f.promise()},e.Deferred=n,e});
//# sourceMappingURL=sourcemaps/deferred.js.map
