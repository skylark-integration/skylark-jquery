/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./core"],function(e){var n=Array.prototype.slice;function r(n){var i=[["resolve","done",e.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",e.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",e.Callbacks({memory:1})]],t="pending",o={state:function(){return t},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var n=arguments;return r(function(r){e.each(i,function(i,t){var c=e.isFunction(n[i])&&n[i];s[t[1]](function(){var n=c&&c.apply(this,arguments);if(n&&e.isFunction(n.promise))n.promise().done(r.resolve).fail(r.reject).progress(r.notify);else{var i=this===o?r.promise():this,s=c?[n]:arguments;r[t[0]+"With"](i,s)}})}),n=null}).promise()},promise:function(n){return null!=n?e.extend(n,o):o}},s={};return o.pipe=o.then,e.each(i,function(e,n){var r=n[2],c=n[3];o[n[1]]=r.add,c&&r.add(function(){t=c},i[1^e][2].disable,i[2][2].lock),s[n[0]]=function(){return s[n[0]+"With"](this===s?o:this,arguments),this},s[n[0]+"With"]=r.fireWith}),o.promise(s),n&&n.call(s,s),s}return e.when=function(i){var t,o,s,c=n.call(arguments),a=c.length,l=0,u=1!==a||i&&e.isFunction(i.promise)?a:0,f=1===u?i:r(),h=function(e,r,i){return function(o){r[e]=this,i[e]=arguments.length>1?n.call(arguments):o,i===t?f.notifyWith(r,i):--u||f.resolveWith(r,i)}};if(a>1)for(t=new Array(a),o=new Array(a),s=new Array(a);l<a;++l)c[l]&&e.isFunction(c[l].promise)?c[l].promise().done(h(l,s,c)).fail(f.reject).progress(h(l,o,t)):--u;return u||f.resolveWith(s,c),f.promise()},e.Deferred=r,e});
//# sourceMappingURL=../sourcemaps/old/deferred.js.map
