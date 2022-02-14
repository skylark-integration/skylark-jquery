/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-noder","skylark-domx-data","skylark-domx-eventer","skylark-domx-finder","skylark-domx-forms","skylark-domx-transits","skylark-domx-fx","skylark-domx-styler","skylark-domx-query","skylark-langx-scripter"],function(t,e,n,r,i,o,s,a,u,f,l,c,d){var p,y=Array.prototype.filter;Array.prototype.slice;return(p=c).fn.jquery="2.2.0",p.browser=n,p.camelCase=e.camelCase,p.cleanData=function(t){for(var e,n=0;void 0!==(e=t[n]);n++)i.cleanData(e)},p.removeData=function(t,e){i.removeData(t,e)},p.each=e.each,p.extend=e.extend,p.grep=function(t,e){return y.call(t,e)},p.attr=function(t,e){return i.attr(t,e)},p.isArray=e.isArray,p.isEmptyObject=e.isEmptyObject,p.isFunction=e.isFunction,p.isWindow=e.isWindow,p.isPlainObject=e.isPlainObject,p.isNumeric=e.isNumber,p.inArray=e.inArray,p.makeArray=e.makeArray,p.map=e.map,p.noop=function(){},p.parseJSON=window.JSON.parse,p.proxy=e.proxy,p.trim=e.trim,p.type=e.type,p.fn.extend=function(t){e.mixin(p.fn,t)},function(t){t.Event=function(t,n){if(e.isString(t)){var r=t;return o.create(r,n)}return o.proxy(t,n)},t.event={},t.event.special=o.special,t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this},t.fn.triggerHandler=t.fn.trigger,t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.bind=function(t,e,n,r){return this.on(t,e,n,r)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.ready=function(t){return o.ready(t),this},t.fn.stop=function(){return this},t.fn.moveto=function(t,e){return this.transit({left:t+"px",top:e+"px"},.4)},t.ready=o.ready,t.on=o.on,t.off=o.off}(c),function(t){t.uuid=0,t.support=n.support,t.expr={},t.expr[":"]=t.expr.pseudos=t.expr.filters=s.pseudos,t.expr.createPseudo=function(t){return t},t.cssHooks=l.cssHooks,t.contains=r.contains,t.css=l.css,t.data=i.data,t.fx=f,t.fx.step={},t.fn.animate=t.wraps.wrapper_every_act(f.animate,f),t.speed=function(e,n,r){var i=e&&"object"==typeof e?t.extend({},e):{complete:r||!r&&n||t.isFunction(e)&&e,duration:e,easing:r&&n||n&&!t.isFunction(n)&&n};return t.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in t.fx.speeds?i.duration=t.fx.speeds[i.duration]:i.duration=t.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){t.isFunction(i.old)&&i.old.call(this),i.queue&&t.dequeue(this,i.queue)},i},t.easing={},t.offset={},t.offset.setOffset=function(e,n,r){var i=t.css(e,"position");"static"===i&&(e.style.position="relative");var o,s,a=t(e),u=a.offset(),f=t.css(e,"top"),l=t.css(e,"left"),c={},d={};("absolute"===i||"fixed"===i)&&t.inArray("auto",[f,l])>-1?(o=(d=a.position()).top,s=d.left):(o=parseFloat(f)||0,s=parseFloat(l)||0),t.isFunction(n)&&(n=n.call(e,r,u)),null!=n.top&&(c.top=n.top-u.top+o),null!=n.left&&(c.left=n.left-u.left+s),"using"in n?n.using.call(e,c):a.css(c)},t._data=function(t,e){return t.hasAttribute?i.data(t,e):{}};var e=t.fn.text;t.fn.text=function(t){var n=e.apply(this,arguments);return void 0===n&&(n=""),n},t.fn.pos=t.fn.position}(c),c.parseHTML=function(t){return r.createFragment(t)},c.uniqueSort=c.unique=e.uniq,c.skylark=t,window.jQuery=window.$=c});
//# sourceMappingURL=sourcemaps/core.js.map
