/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./core","./deferred"],function(t){function e(e,a,n){var r=t.Event(a);return t(e).trigger(r,n),!r.isDefaultPrevented()}function a(t,a,n,r){if(t.global)return e(a||g,n,r)}function n(e){e.global&&0===t.active++&&a(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&a(e,null,"ajaxStop")}function o(t,e){var n=e.context;return e.beforeSend.call(n,t,e)!==!1&&a(e,n,"ajaxBeforeSend",[t,e])!==!1&&void a(e,n,"ajaxSend",[t,e])}function i(t,e,n,r){var o=n.context,i="success";n.success.call(o,t,i,e),r&&r.resolveWith(o,[t,i,e]),a(n,o,"ajaxSuccess",[e,n,t]),c(i,e,n)}function s(t,e,n,r,o){var i=r.context;r.error.call(i,n,e,t),o&&o.rejectWith(i,[n,e,t]),a(r,i,"ajaxError",[n,r,t||e]),c(e,n,r)}function c(t,e,n){var o=n.context;n.complete.call(o,e,t),a(n,o,"ajaxComplete",[e,n]),r(n)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==D?"html":t==b?"json":S.test(t)?"script":T.test(t)&&"xml")||"text"}function p(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function d(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=p(e.url,e.data),e.data=void 0)}function f(e,a,n,r){return t.isFunction(a)&&(r=n,n=a,a=void 0),t.isFunction(n)||(r=n,n=void 0),{url:e,data:a,success:n,dataType:r}}function x(e,a,n,r){var o,i=t.isArray(a),s=t.isPlainObject(a);t.each(a,function(a,c){o=t.type(c),r&&(a=n?r:r+"["+(s||"object"==o||"array"==o?a:"")+"]"),!r&&i?e.add(c.name,c.value):"array"==o||!n&&"object"==o?x(e,c,n,a):e.add(a,c)})}function j(t){return function(e,a){"string"!=typeof e&&(a=e,e="*");var n,r=0,o=e.toLowerCase().match(H)||[];if(jQuery.isFunction(a))for(;n=o[r++];)"+"===n[0]?(n=n.slice(1)||"*",(t[n]=t[n]||[]).unshift(a)):(t[n]=t[n]||[]).push(a)}}function m(t,e){var a,n,r=jQuery.ajaxSettings.flatOptions||{};for(a in e)void 0!==e[a]&&((r[a]?t:n||(n={}))[a]=e[a]);return n&&jQuery.extend(!0,t,n),t}var h,v,y=0,g=window.document,w=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,S=/^(?:text|application)\/javascript/i,T=/^(?:text|application)\/xml/i,b="application/json",D="text/html",C=/^\s*$/,E=g.createElement("a");E.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,a){if(!("type"in e))return t.ajax(e);var n,r,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++y,l=g.createElement("script"),p=window[u],d=function(e){t(l).triggerHandler("error",e||"abort")},f={abort:d};return a&&a.promise(f),t(l).on("load error",function(o,c){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&n?i(n[0],f,e,a):s(null,c||"error",f,e,a),window[u]=p,n&&t.isFunction(p)&&p(n[0]),p=n=void 0}),o(f,e)===!1?(d("abort"),f):(window[u]=function(){n=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),g.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){d("timeout")},e.timeout)),f)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:b,xml:"application/xml, text/xml",html:D,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,r=t.extend({},e||{}),c=t.Deferred&&t.Deferred();for(h in t.ajaxSettings)void 0===r[h]&&(r[h]=t.ajaxSettings[h]);n(r),r.crossDomain||(a=g.createElement("a"),a.href=r.url,a.href=a.href,r.crossDomain=E.protocol+"//"+E.host!=a.protocol+"//"+a.host),r.url||(r.url=window.location.toString()),d(r);var f=r.dataType,x=/\?.+=\?/.test(r.url);if(x&&(f="jsonp"),r.cache!==!1&&(e&&e.cache===!0||"script"!=f&&"jsonp"!=f)||(r.url=p(r.url,"_="+Date.now())),"jsonp"==f)return x||(r.url=p(r.url,r.jsonp?r.jsonp+"=?":r.jsonp===!1?"":"callback=?")),t.ajaxJSONP(r,c);var j,m=r.accepts[f],y={},w=function(t,e){y[t.toLowerCase()]=[t,e]},S=/^([\w-]+:)\/\//.test(r.url)?RegExp.$1:window.location.protocol,T=r.xhr(),b=T.setRequestHeader;if(c&&c.promise(T),r.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",m||"*/*"),(m=r.mimeType||m)&&(m.indexOf(",")>-1&&(m=m.split(",",2)[0]),T.overrideMimeType&&T.overrideMimeType(m)),(r.contentType||r.contentType!==!1&&r.data&&"GET"!=r.type.toUpperCase())&&w("Content-Type",r.contentType||"application/x-www-form-urlencoded"),r.headers)for(v in r.headers)w(v,r.headers[v]);if(T.setRequestHeader=w,T.onreadystatechange=function(){if(4==T.readyState){T.onreadystatechange=u,clearTimeout(j);var e,a=!1;if(T.status>=200&&T.status<300||304==T.status||0==T.status&&"file:"==S){f=f||l(r.mimeType||T.getResponseHeader("content-type")),e=T.responseText;try{"script"==f?(0,eval)(e):"xml"==f?e=T.responseXML:"json"==f&&(e=C.test(e)?null:t.parseJSON(e))}catch(n){a=n}a?s(a,"parsererror",T,r,c):i(e,T,r,c)}else s(T.statusText||null,T.status?"error":"abort",T,r,c)}},o(T,r)===!1)return T.abort(),s(null,"abort",T,r,c),T;if(r.xhrFields)for(v in r.xhrFields)T[v]=r.xhrFields[v];var D=!("async"in r)||r.async;T.open(r.type,r.url,D,r.username,r.password);for(v in y)b.apply(T,y[v]);return r.timeout>0&&(j=setTimeout(function(){T.onreadystatechange=u,T.abort(),s(null,"timeout",T,r,c)},r.timeout)),T.send(r.data?r.data:null),T},t.get=function(){return t.ajax(f.apply(null,arguments))},t.post=function(){var e=f.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=f.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,a,n){if(!this.length)return this;var r,o=this,i=e.split(/\s/),s=f(e,a,n),c=s.success;return i.length>1&&(s.url=i[0],r=i[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(w,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(s),this};var F=encodeURIComponent;t.param=function(e,a){var n=[];return n.add=function(e,a){t.isFunction(a)&&(a=a()),null==a&&(a=""),this.push(F(e)+"="+F(a))},x(n,e,a),n.join("&").replace(/%20/g,"+")};var O={},R={},H=/\S+/g;return t.ajaxPrefilter=j(O),t.ajaxTransport=j(R),t.ajaxSetup=function(t,e){return e?m(m(t,jQuery.ajaxSettings),e):m(jQuery.ajaxSettings,t)},t});
//# sourceMappingURL=../sourcemaps/old/ajax.js.map
