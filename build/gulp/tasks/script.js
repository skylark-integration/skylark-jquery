var gulp = require('gulp'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    sourceMaps = require('gulp-sourcemaps'),
    amdOptimize = require('gulp-requirejs'),
    uglify = require('gulp-uglify'),
    replace = require('gulp-replace'),
    rename = require("gulp-rename"),
    util = require('../utils'),
     fs = require('fs');


var src = [util.src +  "**/*.js"];

var dest = util.dest+"uncompressed/";

var requireConfig = {
    baseUrl: util.src,
    out : util.pkg.name + ".js",
    packages : [{
       name : "skylark-langx" ,
       location :  util.lib_langx+"uncompressed/skylark-langx"
    },
    {
       name : "skylark-utils" ,
       location :  util.lib_utils+"uncompressed/skylark-utils"
    },
    {
       name : util.pkg.name ,
       location :  util.src,
       main : "core"

    }],

    include: [
        util.pkg.name + "/ajax",
        util.pkg.name + "/callbacks",
        util.pkg.name + "/core",
        util.pkg.name + "/deferred"
    ],
    exclude: [
        "skylark-utils"
    ]
};


module.exports = function() {
    var p =  new Promise(function(resolve, reject) {
     gulp.src(src)
        .pipe(header(util.banner, {
            pkg: util.pkg
        }) )
        .on("error", reject)
        .pipe(gulp.dest(dest+util.pkg.name))
        .on("end",resolve);
    });

    return p.then(function(){
        return amdOptimize(requireConfig)
            .pipe(header(fs.readFileSync(util.allinoneHeader, 'utf8')))
            .pipe(footer(fs.readFileSync(util.allinoneFooter, 'utf8')))
            .pipe(header(util.banner, {
                pkg: util.pkg
            })) 
            .pipe(gulp.dest(dest));
    })

};
