/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx"],function(e,r){function t(e,r){var t,n,i=function(){e.apply(null,n)};return function(){n=arguments,clearTimeout(t),t=setTimeout(i,r)}}function n(e){return requestAnimationFrame(e),this}function i(e){return i}var o=function(){this.promise=new Promise(function(e,r){this._resolve=e,this._reject=r}.bind(this)),this.resolve=o.prototype.resolve.bind(this),this.reject=o.prototype.reject.bind(this)};return o.prototype.resolve=function(e){return this._resolve.call(this.promise,e),this.promise},o.prototype.reject=function(e){return this._reject.call(this.promise,e),this.promise},o.prototype.then=function(e,r,t){return this.promise.then(e,r,t)},o.all=function(e){return Promise.all(e)},o.first=function(e){return Promise.race(e)},o.when=function(e,r,t,n){var i=e&&"function"==typeof e.then,s=i&&e instanceof Promise;if(!i)return arguments.length>1?r?r(e):e:(new o).resolve(e);if(!s){var c=new o(e.cancel);e.then(c.resolve,c.reject,c.progress),e=c.promise}return r||t||n?e.then(r,t,n):e},o.reject=function(e){var r=new o;return r.reject(e),r.promise},o.resolve=function(e){var r=new o;return r.resolve(e),r.promise},o.immediate=o.resolve,r.mixin(i,{all:o.all,debounce:t,Deferred:o,first:o.first,nextTick:n,reject:o.reject,resolve:o.resolve,when:o.when}),e.async=i});
//# sourceMappingURL=sourcemaps/async.js.map
