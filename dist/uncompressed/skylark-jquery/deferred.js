define([
    "./core",
    "skylark-langx/langx"
], function($,langx) {

    $.Deferred = function() {
        var d = new langx.Deferred(),
            ret = {
                promise : function() {
                    return d.promise;
                }
            };

        ["resolve","resolveWith","reject","rejectWith","notify","then","done","fail","progress"].forEach(function(name){
            ret[name] = function() {
              var ret2 =   d[name].apply(d,arguments);
              if (ret2 == d) {
                ret2 = ret;
              }
              return ret2;
            }
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
