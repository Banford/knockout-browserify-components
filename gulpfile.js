var gulp = require('gulp');

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');

var config = {
    publicPath: __dirname + '/dist',
    app: {
        path: __dirname + '/src',
        main: 'app.ts',
        result: 'app.js'
    }
};

gulp.task('compile-js', function() {
    var bundler = browserify({basedir: config.app.path})
        .add(config.app.path + '/' + config.app.main)
        .plugin(tsify);

    return bundler.bundle()
        .pipe(source(config.app.result))
        .pipe(gulp.dest(config.publicPath));
});