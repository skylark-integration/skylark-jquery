define([
	"skylark-langx/skylark",
	"skylark-langx/langx",
	"skylark-utils-dom/browser",
	"skylark-utils-dom/noder",
	"skylark-utils-dom/datax",
	"skylark-utils-dom/eventer",
	"skylark-utils-dom/finder",
	"skylark-utils-dom/fx",
	"skylark-utils-dom/styler",
	"skylark-utils-dom/query"
],function(skylark,langx,browser,noder,datax,eventer,finder,fx,styler,query){
	var filter = Array.prototype.filter,
		slice = Array.prototype.slice;

    (function($){
	    $.fn.jquery = '2.2.0';

	    $.browser = browser;
	    
	    $.camelCase = langx.camelCase;

		$.cleanData = function( elems ) {
			var elem,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				datax.cleanData(elem);
			}
		};

		$.removeData = function(elm,name) {
			datax.removeData(elm,name);
		}
	
	    $.each = langx.each;

	    $.extend = langx.extend;

	    $.grep = function(elements, callback) {
	        return filter.call(elements, callback)
	    };

	    $.attr = function(elm,name) {
	    	return datax.attr(elm,name);
	    };

	    $.isArray = langx.isArray;
	    $.isEmptyObject = langx.isEmptyObject;
	    $.isFunction = langx.isFunction;
	    $.isWindow = langx.isWindow;
	    $.isPlainObject = langx.isPlainObject;
        $.isNumeric = langx.isNumber;

	    $.inArray = langx.inArray;

	    $.makeArray = langx.makeArray;
	    $.map = langx.map;  // The behavior is somewhat different from the original jquery.

	    $.noop = function() {
	    };

	    $.parseJSON = window.JSON.parse;

	    $.proxy = langx.proxy;

	    $.trim = langx.trim;
	    $.type = langx.type;

	    $.fn.extend = function(props) {
	        langx.mixin($.fn, props);
	    };

	    $.fn.serializeArray = function() {
	        var name, type, result = [],
	            add = function(value) {
	                if (value.forEach) return value.forEach(add)
	                result.push({ name: name, value: value })
	            }
	        if (this[0]) langx.each(this[0].elements, function(_, field) {
	            type = field.type, name = field.name
	            if (name && field.nodeName.toLowerCase() != 'fieldset' &&
	                !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
	                ((type != 'radio' && type != 'checkbox') || field.checked))
	                add($(field).val())
	        })
	        return result
	    };

	    $.fn.serialize = function() {
	        var result = []
	        this.serializeArray().forEach(function(elm) {
	            result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
	        })
	        return result.join('&')
	    };
    })(query);

    (function($){
        $.Event = function Event(src, props) {
            if (langx.isString(src)) {
            	var type = src;
            	return eventer.create(type, props);
	        }
            return eventer.proxy(src, props);
        };

        $.event = {};

	    $.event.special = eventer.special;

	    $.fn.submit = function(callback) {
	        if (0 in arguments) this.bind('submit', callback)
	        else if (this.length) {
	            var event = $.Event('submit')
	            this.eq(0).trigger(event)
	            if (!event.isDefaultPrevented()) this.get(0).submit()
	        }
	        return this
	    };

	    // event
	    $.fn.triggerHandler = $.fn.trigger;

	    $.fn.delegate = function(selector, event, callback) {
	        return this.on(event, selector, callback)
	    };

	    $.fn.undelegate = function(selector, event, callback) {
	        return this.off(event, selector, callback)
	    };

	    $.fn.live = function(event, callback) {
	        $(document.body).delegate(this.selector, event, callback)
	        return this
	    };

	    $.fn.die = function(event, callback) {
	        $(document.body).undelegate(this.selector, event, callback)
	        return this
	    };

	    $.fn.bind = function(event, selector, data, callback) {
	        return this.on(event, selector, data, callback)
	    };

	    $.fn.unbind = function(event, callback) {
	        return this.off(event, callback)
	    };

	    $.fn.ready = function(callback) {
	        eventer.ready(callback);
	        return this;
	    };

	    $.fn.stop = function() {
	        // todo
	        return this;
	    };

	    $.fn.moveto = function(x, y) {
	        return this.animate({
	            left: x + "px",
	            top: y + "px"
	        }, 0.4);

	    };

	    $.ready = eventer.ready;

	    $.on = eventer.on;

	    $.off = eventer.off;
    })(query);

    (function($){
	    // plugin compatibility
	    $.uuid = 0;
	    $.support = browser.support;
	    $.expr = {};

	    $.expr[":"] = $.expr.pseudos = $.expr.filters = finder.pseudos;

	    $.expr.createPseudo = function(fn) {
	    	return fn;
	    };

	    $.cssHooks = styler.cssHooks;

	    $.contains = noder.contains;

	    $.css = styler.css;

	    $.data = datax.data;

	    $.fx = fx;
	    $.fx.step = {

        };

        $.easing = {};

	    $.offset = {};
	    $.offset.setOffset = function(elem, options, i) {
	        var position = $.css(elem, "position");

	        // set position first, in-case top/left are set even on static elem
	        if (position === "static") {
	            elem.style.position = "relative";
	        }

	        var curElem = $(elem),
	            curOffset = curElem.offset(),
	            curCSSTop = $.css(elem, "top"),
	            curCSSLeft = $.css(elem, "left"),
	            calculatePosition = (position === "absolute" || position === "fixed") && $.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
	            props = {},
	            curPosition = {},
	            curTop, curLeft;

	        // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
	        if (calculatePosition) {
	            curPosition = curElem.position();
	            curTop = curPosition.top;
	            curLeft = curPosition.left;
	        } else {
	            curTop = parseFloat(curCSSTop) || 0;
	            curLeft = parseFloat(curCSSLeft) || 0;
	        }

	        if ($.isFunction(options)) {
	            options = options.call(elem, i, curOffset);
	        }

	        if (options.top != null) {
	            props.top = (options.top - curOffset.top) + curTop;
	        }
	        if (options.left != null) {
	            props.left = (options.left - curOffset.left) + curLeft;
	        }

	        if ("using" in options) {
	            options.using.call(elem, props);
	        } else {
	            curElem.css(props);
	        }
	    };

        $._data = function(elm,propName) {
            if (elm.hasAttribute) {
                return datax.data(elm,propName);
            } else {
                return {};
            }
        };

     	var t = $.fn.text;  
	    $.fn.text = function(v) {
	        var r = t.apply(this,arguments);
	        if (r === undefined) {
	            r = "";
	        }  
	        return r;
	    };       
        	    
    })(query);

    query.parseHTML = function(html) {
        return  noder.createFragment(html);
    };

    query.uniqueSort = query.unique = langx.uniq;

    query.skylark = skylark;

    return window.jQuery = window.$ = query;
});
