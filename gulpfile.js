var gulp = require('gulp'), 
useRef = require('gulp-useref'),
ngAnnotate = require('gulp-ng-annotate'),
templateCache = require('gulp-angular-templatecache'),
sass = require('gulp-sass'),
connect = require('gulp-connect'),
gulpIf = require('gulp-if'),
uglify = require('gulp-uglify'),
cleanCss = require('gulp-clean-css'),
wrap = require('gulp-wrap');


gulp.task('connect', function() {
	connect.server({
		root: 'dist',
		livereload: true
	});
});

gulp.task('useRef', ['templates', 'ngAnnotate', 'styles', 'styles-vendor', 'copy-js-vendor'], function() {
	return gulp.src('index.html')
		.pipe(useRef({searchPath:'tmp'}))
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulp.dest('dist'));
});

gulp.task('templates', function() {
	return gulp.src('app/**/*.html')
		.pipe(templateCache('templates.js', {
			standalone: true,
			module: 'appTemplates',
			root: 'app/'
		}))
		.pipe(gulp.dest('tmp/app'));
});

gulp.task('ngAnnotate', ['copy-js'], function() {
	return gulp.src('tmp/app/**/*.js')
		.pipe(ngAnnotate({
			remove: true,
			add: true,
			single_quotes: true
		}))
		.pipe(gulp.dest('tmp/app'));
});

gulp.task('copy-js', function(){
	return gulp.src(['app/**/*.js'])
		.pipe(gulp.dest('tmp/app'));
});

gulp.task('copy-js-vendor', function() {
	return gulp.src(['content/**/*.js'])
		.pipe(gulp.dest('tmp/content'));
});

gulp.task('styles', ['sass'], function(){
	return gulp.src(['app/**/*.css'])
		.pipe(gulp.dest('tmp/content/css'));
});

gulp.task('styles-vendor', function() {
	return gulp.src('content/**/*.css')
		.pipe(gulp.dest('tmp/content'));
});

gulp.task('sass', function() {
	return gulp.src('app/**/*.scss')
		.pipe(sass())
		.pipe(cleanCss())
		.pipe(gulp.dest('app'));
});

gulp.task('watch:scss', function() {
	gulp.watch('app/**/*.scss', ['styles']);
});

gulp.task('watch:js', function() {
	gulp.watch('app/**/*.js', ['useRef']);
});

gulp.task('watch:html', function() {
	gulp.watch('app/**/*.html', ['templates']);
	gulp.watch('index.html', ['useRef']);
});


gulp.task('default', ['connect', 'useRef', 'watch:scss', 'watch:js', 'watch:html']);