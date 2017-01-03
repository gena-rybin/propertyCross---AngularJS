var gulp = require('gulp');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('compress', function (cb) {
    pump([
            gulp.src('app/*.js'),
            uglify(),
            gulp.dest('ddd')
        ],
        cb
    );
});

gulp.task('minify', function () {
    gulp.src('app/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('js:watch', function () {
    // Endless stream mode
    return watch('app/**/*.js', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

// Static Server + watching scss/html files
gulp.task('serv', function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/**/*.css", "app/**/*.js", "app/**/*.html")
            .on('change', browserSync.reload);
});



gulp.task('default', ['serve']);