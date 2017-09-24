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

var dest = util.dest;


var dest = util.dest;

var requireConfig = {
    baseUrl: util.src,
    out : util.pkg.name + "-all.js",
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
    ]
};


module.exports = function() {
    return amdOptimize(requireConfig)
        .on("error",gutil.log)
        .pipe(sourceMaps.init())
        .pipe(header(fs.readFileSync(util.allinoneHeader, 'utf8')))
        .pipe(footer(fs.readFileSync(util.allinoneFooter, 'utf8')))
        .pipe(uglify())
        .on("error",gutil.log)
        .pipe(header(util.banner, {
            pkg: util.pkg
        })) 
        .pipe(sourceMaps.write("sourcemaps"))
        .pipe(gulp.dest(dest));

};
