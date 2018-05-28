// creates variables to run gulp and sass
var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');


// function to copy files from app dir to dist dir
//gulp.task('copy', function() {
  //log("Copying all html files from app directory to dist directory");
	//return gulp.src('app/**/*.html')
		///pipe(gulp.dest('dist/'))
//});

// task to copy all htm/html files from app directory to dist directory
gulp.task('copyhtml', function() {
  return gulp.src('app/**/*.+(htm|html)')
	.pipe(gulp.dest('dist/'))
 });

// task to copy all css files from app directory to dist directory
gulp.task('copycss', function() {
	return gulp.src('app/**/*.css')
		.pipe(gulp.dest('dist/css/'))
});

// function to change sass code to css
gulp.task('sass', function() {
	return gulp.src('app/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css/'))
});

// function to trigger the copy function when new html files are
// added to the app file
//gulp.task('watch', function() {
  //log("Watching html files for modifications");
	//gulp.watch('app/**/*', ['copyhtml', 'copycss' 'sass'])
//});


gulp.task('default', function(callback) {
	runSequence(['sass', 'copycss'], callback)
});
