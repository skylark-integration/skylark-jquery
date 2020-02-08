/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,t){var n=t.define,require=t.require,r="function"==typeof n&&n.amd,i=!r&&"undefined"!=typeof exports;if(!r&&!n){var s={};n=t.define=function(e,t,n){"function"==typeof n?(s[e]={factory:n,deps:t.map(function(t){return function(e,t){if("."!==e[0])return e;var n=t.split("/"),r=e.split("/");n.pop();for(var i=0;i<r.length;i++)"."!=r[i]&&(".."==r[i]?n.pop():n.push(r[i]));return n.join("/")}(t,e)}),resolved:!1,exports:null},require(e)):s[e]={factory:null,resolved:!0,exports:n}},require=t.require=function(e){if(!s.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=s[e];if(!module.resolved){var n=[];module.deps.forEach(function(e){n.push(require(e))}),module.exports=module.factory.apply(t,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-jquery/core",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-noder","skylark-domx-data","skylark-domx-eventer","skylark-domx-finder","skylark-domx-forms","skylark-domx-fx","skylark-domx-styler","skylark-domx-query","skylark-domx-scripter"],function(e,t,n,r,i,s,o,a,u,l,c,f){var d,p=Array.prototype.filter;Array.prototype.slice;return(d=c).fn.jquery="2.2.0",d.browser=n,d.camelCase=t.camelCase,d.cleanData=function(e){for(var t,n=0;void 0!==(t=e[n]);n++)i.cleanData(t)},d.removeData=function(e,t){i.removeData(e,t)},d.each=t.each,d.extend=t.extend,d.grep=function(e,t){return p.call(e,t)},d.attr=function(e,t){return i.attr(e,t)},d.isArray=t.isArray,d.isEmptyObject=t.isEmptyObject,d.isFunction=t.isFunction,d.isWindow=t.isWindow,d.isPlainObject=t.isPlainObject,d.isNumeric=t.isNumber,d.inArray=t.inArray,d.makeArray=t.makeArray,d.map=t.map,d.noop=function(){},d.parseJSON=window.JSON.parse,d.proxy=t.proxy,d.trim=t.trim,d.type=t.type,d.fn.extend=function(e){t.mixin(d.fn,e)},function(e){e.Event=function(e,n){if(t.isString(e)){var r=e;return s.create(r,n)}return s.proxy(e,n)},e.event={},e.event.special=s.special,e.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this},e.fn.triggerHandler=e.fn.trigger,e.fn.delegate=function(e,t,n){return this.on(t,e,n)},e.fn.undelegate=function(e,t,n){return this.off(t,e,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.bind=function(e,t,n,r){return this.on(e,t,n,r)},e.fn.unbind=function(e,t){return this.off(e,t)},e.fn.ready=function(e){return s.ready(e),this},e.fn.stop=function(){return this},e.fn.moveto=function(e,t){return this.animate({left:e+"px",top:t+"px"},.4)},e.ready=s.ready,e.on=s.on,e.off=s.off}(c),function(e){e.uuid=0,e.support=n.support,e.expr={},e.expr[":"]=e.expr.pseudos=e.expr.filters=o.pseudos,e.expr.createPseudo=function(e){return e},e.cssHooks=l.cssHooks,e.contains=r.contains,e.css=l.css,e.data=i.data,e.fx=u,e.fx.step={},e.speed=function(t,n,r){var i=t&&"object"==typeof t?e.extend({},t):{complete:r||!r&&n||e.isFunction(t)&&t,duration:t,easing:r&&n||n&&!e.isFunction(n)&&n};return e.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in e.fx.speeds?i.duration=e.fx.speeds[i.duration]:i.duration=e.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){e.isFunction(i.old)&&i.old.call(this),i.queue&&e.dequeue(this,i.queue)},i},e.easing={},e.offset={},e.offset.setOffset=function(t,n,r){var i=e.css(t,"position");"static"===i&&(t.style.position="relative");var s,o,a=e(t),u=a.offset(),l=e.css(t,"top"),c=e.css(t,"left"),f=("absolute"===i||"fixed"===i)&&e.inArray("auto",[l,c])>-1,d={},p={};f?(p=a.position(),s=p.top,o=p.left):(s=parseFloat(l)||0,o=parseFloat(c)||0),e.isFunction(n)&&(n=n.call(t,r,u)),null!=n.top&&(d.top=n.top-u.top+s),null!=n.left&&(d.left=n.left-u.left+o),"using"in n?n.using.call(t,d):a.css(d)},e._data=function(e,t){return e.hasAttribute?i.data(e,t):{}};var t=e.fn.text;e.fn.text=function(e){var n=t.apply(this,arguments);return void 0===n&&(n=""),n},e.fn.pos=e.fn.position}(c),c.parseHTML=function(e){return r.createFragment(e)},c.uniqueSort=c.unique=t.uniq,c.skylark=e,window.jQuery=window.$=c}),e("skylark-jquery/ajax",["skylark-langx/langx","skylark-net-http/Xhr","./core"],function(e,t,n){var r=0;function i(e,t){return""==t?e:(e+"&"+t).replace(/[&?]{1,2}/,"?")}function s(e,t,r,i){return n.isFunction(e)?(i=t,r=e,t=void 0,e=void 0):n.isFunction(t)&&(i=r,r=t,t=void 0),n.isFunction(r)||(i=r,r=void 0),{url:e,data:t,success:r,dataType:i}}n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){n.fn[t]=function(e){return this.on(t,e)}}),n.ajaxJSONP=function(t){var s,o,a=new e.Deferred,u=t.jsonpCallback,l=(n.isFunction(u)?u():u)||"jsonp"+ ++r,c=document.createElement("script"),f=window[l],d=function(e){n(c).triggerHandler("error",e||"abort")},p={abort:d};for(var h in t.data)t.url=i(t.url,h+"="+t.data[h]);return n(c).on("load error",function(e,t){clearTimeout(o),n(c).off().remove(),"error"!=e.type&&s?a.resolve(s[0],200,p):a.reject(e),window[l]=f,s&&n.isFunction(f)&&f(s[0]),f=s=void 0}),window[l]=function(){s=arguments},c.src=t.url.replace(/\?(.+)=\?/,"?$1="+l),document.head.appendChild(c),t.timeout>0&&(o=setTimeout(function(){d("timeout")},t.timeout)),a},n.ajaxSettings={processData:!0},n.ajax=function(r,s){if(r?s?s.url=r:s=e.isString(r)?{url:r}:r:s={url:"./"},"jsonp"==(s=e.mixin({},n.ajaxSettings,s)).dataType){var o=/\?.+=\?/.test(s.url);return o||(s.url=i(s.url,s.jsonp?s.jsonp+"=?":!1===s.jsonp?"":"callback=?")),n.ajaxJSONP(s)}var a=t.request(s.url,s);return(a=a.then(function(e,t,r){n(document).trigger("ajaxSucess"),s.success&&s.success.apply(this,arguments);s.complete&&s.complete.apply(this,arguments);return e},function(){n(document).trigger("ajaxError"),s.error&&s.error.apply(this,arguments)})).success=a.done,a.error=a.fail,a.complete=a.always,a},n.get=function(){return n.ajax(s.apply(null,arguments))},n.post=function(){var e=s.apply(null,arguments);return e.type="POST",n.ajax(e)},n.getJSON=function(){var e=s.apply(null,arguments);return e.dataType="json",n.ajax(e)};var o=n.fn.load;function a(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,s=t.toLowerCase().match(u)||[];if(jQuery.isFunction(n))for(;r=s[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}n.fn.load=function(e,t,r){if("string"!=typeof e&&o)return o.apply(this,arguments);if(!this.length)return this;var i,a=this,u=s(e,t,r),l=u.url&&u.url.split(/\s/),c=u.success;return l&&l.length>1&&(u.url=l[0],i=l[1]),u.data&&"object"==typeof u.data&&(u.type="POST"),u.success=function(e){a.html(i?n("<div>").html(e.replace(rscript,"")).find(i):e),c&&c.apply(a,arguments)},n.ajax(u),this},n.param=t.param;var u=/\S+/g;return n.ajaxPrefilter=a({}),n.ajaxTransport=a({}),n.ajaxSetup=function(n,r){e.mixin(t.defaultOptions,n,r)},n.getScript=function(e,t){return n.get(e,void 0,t,"script")},n}),e("skylark-jquery/callbacks",["./core"],function(e){return e.Callbacks=function(t){var n,r,i,s,o,a,u=[],l=!(t=e.extend({},t)).once&&[],c=function(e){for(n=t.memory&&e,r=!0,a=s||0,s=0,o=u.length,i=!0;u&&a<o;++a)if(!1===u[a].apply(e[0],e[1])&&t.stopOnFalse){n=!1;break}i=!1,u&&(l?l.length&&c(l.shift()):n?u.length=0:f.disable())},f={add:function(){if(u){var r=u.length,a=function(n){e.each(n,function(e,n){"function"==typeof n?t.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&a(n)})};a(arguments),i?o=u.length:n&&(s=r,c(n))}return this},remove:function(){return u&&e.each(arguments,function(t,n){for(var r;(r=e.inArray(n,u,r))>-1;)u.splice(r,1),i&&(r<=o&&--o,r<=a&&--a)}),this},has:function(t){return!(!u||!(t?e.inArray(t,u)>-1:u.length))},empty:function(){return o=u.length=0,this},disable:function(){return u=l=n=void 0,this},disabled:function(){return!u},lock:function(){return l=void 0,n||f.disable(),this},locked:function(){return!l},fireWith:function(e,t){return!u||r&&!l||(t=[e,(t=t||[]).slice?t.slice():t],i?l.push(t):c(t)),this},fire:function(){return f.fireWith(this,arguments)},fired:function(){return!!r}};return f},e}),e("skylark-jquery/deferred",["./core","skylark-langx/langx"],function(e,t){return e.Deferred=function(){var e=new t.Deferred,n={promise:function(){return e.promise}};return["resolve","resolveWith","reject","rejectWith","notify","then","done","fail","progress"].forEach(function(t){n[t]=function(){var r=e[t].apply(e,arguments);return r==e&&(r=n),r}}),n},e.when=function(){var e=t.Deferred.all(t.makeArray(arguments)),n=e.then;return e.then=function(t,r){return n.call(e,function(e){return t&&t.apply(null,e)},r)},e},e}),e("skylark-jquery/queue",["skylark-langx/langx","./core","./callbacks"],function(e,t){var n="Sky"+("1.0"+Math.random()).replace(/\D/g,""),r=/\S+/g,i=[].push;function s(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n+Math.random()}s.uid=1,s.accepts=function(e){return!e.nodeType||(1===e.nodeType||9===e.nodeType)},s.prototype={key:function(e){if(!s.accepts(e))return 0;var n={},r=e[this.expando];if(!r){r=s.uid++;try{n[this.expando]={value:r},Object.defineProperties(e,n)}catch(i){n[this.expando]=r,t.extend(e,n)}}return this.cache[r]||(this.cache[r]={}),r},set:function(e,n,r){var i,s=this.key(e),o=this.cache[s];if("string"==typeof n)o[n]=r;else if(t.isEmptyObject(o))t.extend(this.cache[s],n);else for(i in n)o[i]=n[i];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,n,r){var i;return void 0===n||n&&"string"==typeof n&&void 0===r?void 0!==(i=this.get(e,n))?i:this.get(e,t.camelCase(n)):(this.set(e,n,r),void 0!==r?r:n)},remove:function(e,n){var i,s,o,a=this.key(e),u=this.cache[a];if(void 0===n)this.cache[a]={};else{t.isArray(n)?s=n.concat(n.map(t.camelCase)):(o=t.camelCase(n),s=n in u?[n,o]:(s=o)in u?[s]:s.match(r)||[]),i=s.length;for(;i--;)delete u[s[i]]}},hasData:function(e){return!t.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var o=new s;return t.extend(t,{queue:function(e,n,r){var i;if(e)return n=(n||"fx")+"queue",i=o.get(e,n),r&&(!i||t.isArray(r)?i=o.access(e,n,t.makeArray(r)):i.push(r)),i||[]},dequeue:function(e,n){n=n||"fx";var r=t.queue(e,n),i=r.length,s=r.shift(),o=t._queueHooks(e,n);"inprogress"===s&&(s=r.shift(),i--),s&&("fx"===n&&r.unshift("inprogress"),delete o.stop,s.call(e,function(){t.dequeue(e,n)},o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,n){var r=n+"queueHooks";return o.get(e,r)||o.access(e,r,{empty:t.Callbacks("once memory").add(function(){o.remove(e,[n+"queue",r])})})},makeArray:function(e,n){var r=n||[];return null!=e&&(!function(e){var n=e.length,r=t.type(e);if(t.isWindow(e))return!1;if(1===e.nodeType&&n)return!0;return"array"===r||"function"!==r&&(0===n||"number"==typeof n&&n>0&&n-1 in e)}(Object(e))?i.call(r,e):t.merge(r,"string"==typeof e?[e]:e)),r},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;i<n;i++)e[r++]=t[i];else for(;void 0!==t[i];)e[r++]=t[i++];return e.length=r,e}}),t.extend(t.fn,{queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?t.queue(this[0],e):void 0===n?this:this.each(function(){var r=t.queue(this,e,n);t._queueHooks(this,e),"fx"===e&&"inprogress"!==r[0]&&t.dequeue(this,e)})},dequeue:function(e){return this.each(function(){t.dequeue(this,e)})},delay:function(e,n){return e=t.fx&&t.fx.speeds[e]||e,n=n||"fx",this.queue(n,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=t.Deferred(),a=this,u=this.length,l=function(){--i||s.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=void 0),e=e||"fx";u--;)(r=o.get(a[u],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(l));return l(),s.promise(n)}}),t}),e("skylark-jquery/JqueryPlugin",["skylark-langx-types","skylark-langx-objects","skylark-langx-arrays","skylark-langx/langx","skylark-domx-data","skylark-domx-eventer","skylark-domx-plugins","skylark-domx-query"],function(e,t,n,r,i,s,o,a){var u=0,l=o.Plugin.inherit({klassName:"JqPlugin",pluginEventPrefix:"",options:{create:null},destroy:function(){this.overrided(),this.element.off(this.eventNamespace),this.bindings.off(this.eventNamespace)},_construct:function(e,t){e=a(e||this.defaultElement||this)[0],this.element=a(e),this.uuid=u++,this.eventNamespace="."+this.pluginName+this.uuid,this.bindings=a(),this.classesElementLookup={},this.hoverable=a(),this.focusable=a(),e!==this&&(i.data(e,this.pluginName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=a(e.style?e.ownerDocument:e.document||e),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this.overrided(e,t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_initOptions:function(e){e=r.mixin(this._getCreateOptions(),e),this.overrided(e)},_getCreateOptions:function(){return{}},_getCreateEventData:r.noop,_super:function(){if(this.overrided)return this.overrided.apply(this,arguments)},_superApply:function(e){if(this.overrided)return this.overrided.apply(this,e)},_create:r.noop,_init:r.noop,_classes:function(e){var n=[],i=this;function s(t,s){var o,u;for(u=0;u<t.length;u++)o=i.classesElementLookup[t[u]]||a(),e.add?(e.element.each(function(e,t){var n=r.map(i.classesElementLookup,function(e){return e}).some(function(e){return a(e).is(t)});n||i._on(a(t),{remove:"_untrackClassesElement"})}),o=a(r.uniq(o.get().concat(e.element.get())))):o=a(o.not(e.element).get()),i.classesElementLookup[t[u]]=o,n.push(t[u]),s&&e.classes[t[u]]&&n.push(e.classes[t[u]])}return(e=t.mixin({element:this.element,classes:this.options.classes||{}},e)).keys&&s(e.keys.match(/\S+/g)||[],!0),e.extra&&s(e.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(e){var t=this;r.each(t.classesElementLookup,function(r,i){-1!==n.inArray(e.target,i)&&(t.classesElementLookup[r]=a(i.not(e.target).get()))}),this._off(a(e.target))},_removeClass:function(e,t,n){return this._toggleClass(e,t,n,!1)},_addClass:function(e,t,n){return this._toggleClass(e,t,n,!0)},_toggleClass:function(e,t,n,r){r="boolean"==typeof r?r:n;var i="string"==typeof e||null===e,s={extra:i?t:n,keys:i?e:t,element:i?this.element:e,add:r};return s.element.toggleClass(this._classes(s),r),this},_on:function(e,n,r){var i,s=this;"boolean"!=typeof e&&(r=n,n=e,e=!1),r?(n=i=a(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),t.each(r,function(t,r){function o(){if(e||!0!==s.options.disabled&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof r?s[r]:r).apply(s,arguments)}"string"!=typeof r&&(o.guid=r.guid=r.guid||o.guid||a.guid++);var u=t.match(/^([\w:-]*)\s*(.*)$/),l=u[1]+s.eventNamespace,c=u[2];c?i.on(l,c,o):n.on(l,o)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(t),this.bindings=a(this.bindings.not(e).get()),this.focusable=a(this.focusable.not(e).get()),this.hoverable=a(this.hoverable.not(e).get())},_trigger:function(t,n,r){var i,o,a=this.options[t];if(r=r||{},(n=s.proxy(n)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],o=n.originalEvent)for(i in o)i in n||(n[i]=o[i]);return this.element.trigger(n,r),!(e.isFunction(a)&&!1===a.apply(this.element[0],[n].concat(r))||n.isDefaultPrevented())}});return l}),e("skylark-jquery/widget",["skylark-langx/langx","skylark-domx-plugins","./core","./JqueryPlugin"],function(e,t,n,r){var i,s=Array.prototype.hasOwnProperty,o=Array.prototype.slice;return n.cleanData=(i=n.cleanData,function(e){var t,r,s;for(s=0;null!=(r=e[s]);s++)(t=n._data(r,"events"))&&t.remove&&n(r).triggerHandler("remove");i(e)}),n.widget=function(e,r,i){var s,o,a=e.split(".")[0];e=e.split(".")[1];var u=a+"-"+e;i||(i=r,r=n.Widget),n.isArray(i)&&(i=n.extend.apply(null,[{}].concat(i))),n.expr.pseudos[u.toLowerCase()]=function(e){return!!n.data(e,u)},n[a]=n[a]||{},s=n[a][e];var l=r.prototype,c={};for(var f in i){var d=i[f];n.isPlainObject(d)?c[f]=n.isPlainObject(l[f])?n.widget.extend({},l[f],d):n.widget.extend({},d):c[f]=d}var p=n.widget.extend({widgetEventPrefix:s&&r.prototype.widgetEventPrefix||e},{options:r.prototype.options},c,{name:u,namespace:a,widgetName:e,pluginName:"jqueryui."+(a?a+".":"")+e,widgetFullName:u});return o=n[a][e]=r.inherit(p),n.extend(o,s,{version:i.version,_proto:p,_childConstructors:[]}),s?(n.each(s._childConstructors,function(e,t){var r=t.prototype;n.widget(r.namespace+"."+r.widgetName,o,t._proto)}),delete s._childConstructors):r._childConstructors&&r._childConstructors.push(o),t.register(o,e,u),o},n.widget.extend=function(e){for(var t,r,i=o.call(arguments,1),a=0,u=i.length;a<u;a++)for(t in i[a])r=i[a][t],s.call(i[a],t)&&void 0!==r&&(n.isPlainObject(r)?e[t]=n.isPlainObject(e[t])?n.widget.extend({},e[t],r):n.widget.extend({},r):e[t]=r);return e},n.Widget=r.inherit({widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},widget:function(){return this.element},_setOption:function(e,t){return"classes"===e&&this._setOptionClasses(t),this.options[e]=t,"disabled"===e&&this._setOptionDisabled(t),this},_setOptionClasses:function(e){var t,r,i;for(t in e)i=this.classesElementLookup[t],e[t]!==this.options.classes[t]&&i&&i.length&&(r=n(i.get()),this._removeClass(i,t),r.addClass(this._classes({element:r,keys:t,classes:e,add:!0})))},_setOptionDisabled:function(e){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!e),e&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_delay:function(e,t){var n=this;return setTimeout(function(){return("string"==typeof e?n[e]:e).apply(n,arguments)},t||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(n(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(n(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(n(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(n(e.currentTarget),null,"ui-state-focus")}})}}),n.Widget._childConstructors=[],n.each({show:"fadeIn",hide:"fadeOut"},function(e,t){n.Widget.prototype["_"+e]=function(r,i,s){var o;"string"==typeof i&&(i={effect:i});var a=i?!0===i||"number"==typeof i?t:i.effect||t:e;"number"==typeof(i=i||{})&&(i={duration:i}),o=!n.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&n.effects&&n.effects.effect[a]?r[e](i):a!==e&&r[a]?r[a](i.duration,i.easing,s):r.queue(function(t){n(this)[e](),s&&s.call(r[0]),t()})}}),n.widget}),e("skylark-jquery/main",["./core","./ajax","./callbacks","./deferred","./queue","./JqueryPlugin","./widget"],function(e){return e}),e("skylark-jquery",["skylark-jquery/main"],function(e){return e})}(n),!r){var o=require("skylark-langx/skylark");i?module.exports=o:t.skylarkjs=o}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-jquery.js.map
