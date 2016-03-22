var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    imageoptim = require('gulp-image-optimization'),
    svgSprite = require('gulp-svg-sprite'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

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

//Thanks to Senny Kalidien for the idea of using variable inputpaths
var inputPaths = {
    'css': './public/src/css/*.css',
    'js': './public/src/js/*.js',
    'svg': './public/src/images/icons/svg/*.svg'
}

var outputPaths = {
    'css': './public/dist/css/',
    'js': './public/dist/js/',
    'images': './public/dist/images/',
    'icons': './public/dist/images/icons/'
}

gulp.task('icons', function () {
    gulp.src(inputPaths.svg)
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest(outputPaths.icons));
});

gulp.task('style', function() {
    gulp.src(inputPaths.css)
        .pipe(concat('style.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(outputPaths.css))
});

gulp.task('script', function () {
    gulp.src(inputPaths.js)
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(outputPaths.js));
});

//https://www.npmjs.com/package/gulp-image-optimization
gulp.task('images', function(cb) {
    gulp.src(['./public/src/images/*.png', './public/src/images/*.jpg', './public/src/images/*.jpeg', './public/src/images/*.gif'])
    .pipe(imageoptim({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest(outputPaths.images)).on('end', cb).on('error', cb);
});

gulp.task('watch', function() {
    gulp.watch(inputPaths.css, ['style']);
    gulp.watch(inputPaths.js, ['script']);
})