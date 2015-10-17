// FOUNDATION FOR APPS TEMPLATE GULPFILE
// -------------------------------------
// This file processes all of the assets in the "client" folder, combines them with the Foundation for Apps assets, and outputs the finished files in the "build" folder as a finished app.

// 1. LIBRARIES
// - - - - - - - - - - - - - - -

var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

// Compiles Sass
gulp.task('sass', function () {
    return gulp.src('app/scss/app.scss')
        .pipe($.sass({
            includePaths: 'app/scss',
            outputStyle: 'nested'
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 2 versions', 'ie 10']
        }))
        .pipe(gulp.dest('./app/css/'))
        ;
});

var watchSass = function () {
    gulp.watch(['./app/scss/**/*'], ['sass']);
};

// Starts a test server, which you can view at http://localhost:8079
gulp.task('server', ['sass'], function () {
    gulp.src('./')
        .pipe($.webserver({
            port: 8090,
            host: '0.0.0.0',
            fallback: 'index.html',
            livereload: {
                enable: true, // need this set to true to enable livereload
                port: 35728,
                filter: function(fileName) {
                    if (fileName.match(/.scss$/)) { // exclude sass source maps from livereload
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        }))
    ;
});

// Default task: builds your app, starts a server, and recompiles assets when they change
gulp.task('default', ['server'], watchSass);
