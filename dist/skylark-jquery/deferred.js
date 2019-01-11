/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./core","skylark-langx/langx"],function(e,n){return e.Deferred=function(){var e=new n.Deferred,r={promise:function(){return e.promise}};return["resolve","resolveWith","reject","rejectWith","notify","then","done","fail","progress"].forEach(function(n){r[n]=e[n].bind(e)}),r},e.when=function(){var e=n.Deferred.all(n.makeArray(arguments)),r=e.then;return e.then=function(n,t){return r.call(e,function(e){return e=e.map(function(e){return[e]}),n&&n.apply(null,e)},t)},e},e});
//# sourceMappingURL=sourcemaps/deferred.js.map
