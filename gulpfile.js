'use strict';

var gulp    = require('gulp');
var uglify  = require('gulp-uglify');
var sass    = require('gulp-sass');
var sort    = require('gulp-sort');
var concat  = require('gulp-concat');
var watch   = require('gulp-typescript');



/* Development Tasks */
gulp.task('default', ['watch'], function(){

});

gulp.task('watch', function() {
  gulp.watch('./src/sass/*.scss', ['sass']);
 // gulp.watch('./src/ts/*.ts', ['typescript']);
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/assets/css/'));
});

gulp.task('typescript', function () {
    return gulp.src('./src/ts/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'scripts.js'
        }))
        .pipe(gulp.dest('.build/assets/js'));
});


/* Production Tasks */
gulp.task('build', function(){

});


gulp.task('make_assets', function(){

});
