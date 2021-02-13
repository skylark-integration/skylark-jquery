define([
    "skylark-langx/langx",
    "skylark-net-http/Xhr",
    "./core",
], function(langx,Xhr,$) {
    var jsonpID = 0;

     // Attach a bunch of functions for handling common AJAX events
    $.each( [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function( i, type ) {
        $.fn[ type ] = function( fn ) {
            return this.on( type, fn );
        };
    } );
   

    function appendQuery(url, query) {
        if (query == '') return url
        return (url + '&' + query).replace(/[&?]{1,2}/, '?')
    }
    
    $.ajaxJSONP = function(options) {
        var deferred = new langx.Deferred();
        var _callbackName = options.jsonpCallback,
            callbackName = ($.isFunction(_callbackName) ?
                _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
            script = document.createElement('script'),
            originalCallback = window[callbackName],
            responseData,
            abort = function(errorType) {
                $(script).triggerHandler('error', errorType || 'abort')
            },
            xhr = { abort: abort },
            abortTimeout;

        for (var key in options.data) {
            options.url = appendQuery(options.url, key + "=" + options.data[key]);
        }
         
//        if (deferred) deferred.promise(xhr)

        $(script).on('load error', function(e, errorType) {
            clearTimeout(abortTimeout)
            $(script).off().remove()

            if (e.type == 'error' || !responseData) {
                deferred.reject(e);
            } else {
                deferred.resolve(responseData[0],200,xhr);
            }

            window[callbackName] = originalCallback
            if (responseData && $.isFunction(originalCallback))
                originalCallback(responseData[0])

            originalCallback = responseData = undefined
        })

        window[callbackName] = function() {
            responseData = arguments
        }

        script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
        document.head.appendChild(script)

        if (options.timeout > 0) abortTimeout = setTimeout(function() {
            abort('timeout')
        }, options.timeout)

        return deferred;
    }

    //$.ajaxSettings = Xhr.defaultOptions;
    //$.ajaxSettings.xhr = function() {
    //    return new window.XMLHttpRequest()
    //};

    $.ajaxSettings = {
        processData : true
    };


    $.ajax = function(url,options) {
        if (!url) {
            options = {
                url :  "./"
            };
        } else if (!options) {
            if (langx.isString(url)) {
                options = {
                    url :  url
                };
            } else {
                options = url;
            }
        } else {
            options.url = url;
        }

        options = langx.mixin({},$.ajaxSettings,options);

        if ('jsonp' == options.dataType) {
            var hasPlaceholder = /\?.+=\?/.test(options.url);

            if (!hasPlaceholder)
                options.url = appendQuery(options.url,
                    options.jsonp ? (options.jsonp + '=?') : options.jsonp === false ? '' : 'callback=?')
            return $.ajaxJSONP(options);
        }

        function ajaxSuccess(data,status,xhr) {
            $(document).trigger("ajaxSucess");
            if (options.success) {
                options.success.apply(this,arguments);
            }
            if (options.complete) {
                options.complete.apply(this,arguments);
            }
            return data;
        }

        function ajaxError() {
            $(document).trigger("ajaxError");
            if (options.error) {
                options.error.apply(this,arguments);
            }
        }

        var p = Xhr.request(options.url,options);
        p = p.then(ajaxSuccess,ajaxError);
        p.success = p.done;
        p.error = p.fail;
        p.complete = p.always;
        
        return p;
    };

    // handle optional data/success arguments
    function parseArguments(url, data, success, dataType) {
        if ($.isFunction(url)) {
            dataType = data, success = url, data = undefined,url = undefined;
        } else if ($.isFunction(data)) {
            dataType = success, success = data, data = undefined;
        } 
        if (!$.isFunction(success)) dataType = success, success = undefined
        return {
            url: url,
            data: data,
            success: success,
            dataType: dataType
        }
    }

    $.get = function( /* url, data, success, dataType */ ) {
        return $.ajax(parseArguments.apply(null, arguments))
    }

    $.post = function( /* url, data, success, dataType */ ) {
        var options = parseArguments.apply(null, arguments)
        options.type = 'POST'
        return $.ajax(options)
    }

    $.getJSON = function( /* url, data, success */ ) {
        var options = parseArguments.apply(null, arguments)
        options.dataType = 'json'
        return $.ajax(options)
    }

    var originalLoad = $.fn.load;

    $.fn.load = function(url, data, success) {
        if ("string" != typeof url && originalLoad) {
            return originalLoad.apply(this, arguments);
        }
        if (!this.length) return this
        var self = this,
            options = parseArguments(url, data, success),
            parts = options.url && options.url.split(/\s/),
            selector,
            callback = options.success
        if (parts && parts.length > 1) options.url = parts[0], selector = parts[1]

        if (options.data && typeof options.data === "object") {
            options.type = "POST";
        }
        options.success = function(response) {
            self.html(selector ?
                $('<div>').html(response.replace(rscript, "")).find(selector) : response)
            callback && callback.apply(self, arguments)
        }
        $.ajax(options)
        return this
    }

    $.param = Xhr.param;


    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {

        // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {

            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            var dataType,
                i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

            if (jQuery.isFunction(func)) {

                // For each dataType in the dataTypeExpression
                while ((dataType = dataTypes[i++])) {

                    // Prepend if requested
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);

                        // Otherwise append
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }

    var
        prefilters = {},
        transports = {},
        rnotwhite = (/\S+/g);

    $.ajaxPrefilter = addToPrefiltersOrTransports(prefilters);
    $.ajaxTransport = addToPrefiltersOrTransports(transports);
    $.ajaxSetup = function(target, settings) {
        langx.mixin(Xhr.defaultOptions,target,settings);
    };

    $.getScript = function( url, callback ) {
        return $.get( url, undefined, callback, "script" );
    };

    return $;

});
