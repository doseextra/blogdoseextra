var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var watch = require('gulp-watch');
var cssmin = require("gulp-cssmin");
var stripCssComments = require('gulp-strip-css-comments');

var css = [
  'before/dist/css/style.min.css'
];

var roboto = [
  'before/dist/css/roboto.css'
];

var fontawesome = [
  'before/dist/css/font-awesome.min.css'
];

var js = [
  'before/dist/js/slides.min.js'
];

gulp.task('minify-css', function() {
  gulp.src(css)
  .pipe(concat('style.min.css'))
  .pipe(stripCssComments({all:true}))
  .pipe(cssmin())
  .pipe(gulp.dest('temp/dist/css/'));
});

gulp.task('minify-awesome', function() {
  gulp.src(fontawesome)
  .pipe(concat('font-awesome.min.css'))
  .pipe(stripCssComments({all:true}))
  .pipe(cssmin())
  .pipe(gulp.dest('temp/dist/css/'));
});

gulp.task('minify-html', function() {
    return gulp.src(['before/*/index.html','before/*/404.html','before/index.html','before/*/*/index.html','before/*/*/*/*/index.html','before/*/page/*/index.html'])
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('temp/'));
});

gulp.task('minify-roboto', function(){
    gulp.src(css)
    .pipe(concat('roboto.css'))
    .pipe(stripCssComments({all: true}))
    .pipe(cssmin())
    .pipe(gulp.dest('temp/dist/css/'));
});

gulp.task('minify-js', function () {
    gulp.src(js)                        // Arquivos que serão carregados, veja variável 'js' no início
    .pipe(concat('slides.min.js'))      // Arquivo único de saída
    .pipe(uglify())                     // Transforma para formato ilegível
    .pipe(gulp.dest('temp/dist/js/'));          // pasta de destino do arquivo(s)
});

gulp.task('default',['minify-js','minify-css','minify-html','minify-roboto','minify-awesome']);
