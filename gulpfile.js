'use strict';
var gulp = require('gulp');
var path = require('path');

var styles_root = '.';
var main_file = "custom.less";

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
    return gulp.src(path.join(styles_root, main_file))
        .pipe($.less())
        .pipe($.autoprefixer('last 1 version'))
        .pipe($.size())
        .pipe(gulp.dest(styles_root));
});
