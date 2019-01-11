/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./core","skylark-langx/langx"],function(e,r){return r.Deferred.prototype.notify=r.Deferred.prototype.progress,e.Deferred=function(){var e=new r.Deferred,n={promise:function(){return e.promise}};return["resolve","resolveWith","reject","rejectWith","notify","then","done","fail","progress"].forEach(function(r){n[r]=e[r].bind(e)}),n},e.when=function(){var e=r.Deferred.all(r.makeArray(arguments)),n=e.then;return e.then=function(r,t){return n.call(e,function(e){return e=e.map(function(e){return[e]}),r&&r.apply(null,e)},t)},e},e});
//# sourceMappingURL=sourcemaps/deferred.js.map
