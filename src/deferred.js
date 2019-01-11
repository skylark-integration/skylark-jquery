define([
    "./core",
    "skylark-langx/langx"
], function($,langx) {

    langx.Deferred.prototype.notify = langx.Deferred.prototype.progress;

    $.Deferred = function() {
        var d = new langx.Deferred(),
            ret = {
                promise : function() {
                    return d.promise;
                }
            };

        ["resolve","resolveWith","reject","rejectWith","notify","then","done","fail","progress"].forEach(function(name){
            ret[name] = d[name].bind(d);
        });

        return ret;
    };
    
    $.when = function(){
        var p = langx.Deferred.all(langx.makeArray(arguments)),
            originThen = p.then;
        p.then = function(onResolved,onRejected) {
            var handler = function(results) {
                results = results.map(function(result){
                    return [result];
                });
                return onResolved && onResolved.apply(null,results);
            };
            return originThen.call(p,handler,onRejected);
        };
        return p;
    };

    return $;

});
