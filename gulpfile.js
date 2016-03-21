var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    svgSprite = require('gulp-svg-sprite'),
    uglify = require('gulp-uglify');

var svgConfig = {
    dest: '.',
    shape: {
        dimension: {
            maxWidth: 15,
            maxHeight: 15
        },
        spacing: {
            padding: 5,
        },
    },
    mode: {
        css: {
            dest: '.',
            sprite: 'sprite.svg',
            render: {
                css: true
            },
            example: true,
            prefix: '.icn-'
        }
    }
};

gulp.task('icons', function () {
    gulp.src('./public/icons/svg/*.svg')
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('./public/icons/sprite/'));
});

gulp.task('style', function() {
    gulp.src('./public/src/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./public/dist/css/'))
})

gulp.task('script', function () {
    gulp.src('./public/src/js/*.js')
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./public/dist/js/'));
})