/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./core"],function(n){return n.Callbacks=function(t){var e,i,r,u,o,f,c=[],h=!(t=n.extend({},t)).once&&[],s=function(n){for(e=t.memory&&n,i=!0,f=u||0,u=0,o=c.length,r=!0;c&&f<o;++f)if(!1===c[f].apply(n[0],n[1])&&t.stopOnFalse){e=!1;break}r=!1,c&&(h?h.length&&s(h.shift()):e?c.length=0:l.disable())},l={add:function(){if(c){var i=c.length,f=function(e){n.each(e,function(n,e){"function"==typeof e?t.unique&&l.has(e)||c.push(e):e&&e.length&&"string"!=typeof e&&f(e)})};f(arguments),r?o=c.length:e&&(u=i,s(e))}return this},remove:function(){return c&&n.each(arguments,function(t,e){for(var i;(i=n.inArray(e,c,i))>-1;)c.splice(i,1),r&&(i<=o&&--o,i<=f&&--f)}),this},has:function(t){return!(!c||!(t?n.inArray(t,c)>-1:c.length))},empty:function(){return o=c.length=0,this},disable:function(){return c=h=e=void 0,this},disabled:function(){return!c},lock:function(){return h=void 0,e||l.disable(),this},locked:function(){return!h},fireWith:function(n,t){return!c||i&&!h||(t=[n,(t=t||[]).slice?t.slice():t],r?h.push(t):s(t)),this},fire:function(){return l.fireWith(this,arguments)},fired:function(){return!!i}};return l},n});
//# sourceMappingURL=sourcemaps/callbacks.js.map
