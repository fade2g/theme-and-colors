'use strict';
var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var watch = require('gulp-watch');
var autoprefixer  = require('gulp-autoprefixer');
var size = require('gulp-size');


var styles_root = '.';
var main_file = "custom.less";

gulp.task('styles', function () {
    return gulp.src(path.join(styles_root, main_file))
        .pipe(less())
        .pipe(autoprefixer('last 1 version'))
        .pipe(size())
        .pipe(gulp.dest(styles_root))
});

gulp.task('watch', function() {
   gulp.watch('./*.less', ['styles'])
});