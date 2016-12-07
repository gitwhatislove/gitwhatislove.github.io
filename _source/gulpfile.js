const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const newer = require('gulp-newer');
// const remember = require('gulp-remember');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src('src/scss/all.scss')
	.pipe(debug({title:'src'}))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(debug({title:'auto'}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('public'));
});

gulp.task('clean', function() {
	return del('public');
});

gulp.task('assets', function() {
	return gulp.src('src/assets/**', {since: gulp.lastRun('assets')})
		.pipe(newer('public'))
		.pipe(debug({title:'assets'}))
		.pipe(gulp.dest('public'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('sass', 'assets')));

gulp.task('watch', function() {
	gulp.watch('src/scss/**/*.*', gulp.series('sass'));
	gulp.watch('src/assets/**', gulp.series('assets'));
});

gulp.task('serve', function(){
	browserSync.init({
		server:'public'
	});

	browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', 
	gulp.series('build', gulp.parallel('watch', 'serve'))
);