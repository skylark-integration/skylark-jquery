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
    out : util.pkg.name + "-all.js",
    packages : [{
       name : "skylark-utils" ,
       location :  util.lib+"skylark-utils-v0.9.0/uncompressed/skylark-utils"
   },
    {
       name : util.pkg.name ,
       location :  util.src,
       main : "core"

    }],
    paths: {
    },

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
        .pipe(header(fs.readFileSync(util.allinoneHeader, 'utf8')))
        .pipe(footer(fs.readFileSync(util.allinoneFooter, 'utf8')))
        .pipe(header(util.banner, {
            pkg: util.pkg
        })) 
        .pipe(gulp.dest(dest));

};
