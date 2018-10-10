/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./core","skylark-langx/langx"],function(n,r){return n.Deferred=function(){var n=new r.Deferred,e=n.promise;return n.promise=function(){return e},n},n.when=function(){var n=r.Deferred.all(r.makeArray(arguments)),e=n.then;return n.then=function(r,t){var u=function(n){return n=n.map(function(n){return[n]}),r&&r.apply(null,n)};return e.call(n,u,t)},n},n});
//# sourceMappingURL=sourcemaps/deferred.js.map
