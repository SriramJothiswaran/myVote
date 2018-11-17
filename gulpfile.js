var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var minifyInline = require('gulp-minify-inline');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');




var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');


  // Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];


gulp.task('styles', function() {
  return gulp.src('public/css/style.css')
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    }))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./dist/css'))
});


// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src(['*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    })).pipe(minifyInline())
      .pipe(gulp.dest('./dist'));
});


gulp.task('imagemin', () =>
    gulp.src('public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/public/images'))
);

gulp.task('imagemini', () =>
    gulp.src('public/images/carousal/optimized/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/public/images/carousal/optimized'))
);


gulp.task('compress', function() {
  gulp.src('public/js/main.js')
    .pipe(minify())
    .pipe(gulp.dest('dist/public/js'))
});
