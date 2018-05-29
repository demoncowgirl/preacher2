// creates variables to run gulp and sass
var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');



// task to copy all htm/html files from app directory to dist directory
gulp.task('copyhtml', function() {
  return gulp.src('app/*.+(htm|html)')
	.pipe(gulp.dest('dist/'))
 });

gulp.task('copyimages', function(){
  return gulp.src('app/images/*.+(png|jpg)')
  .pipe(gulp.dest('dist/images'))
})

// function to change sass code to css
gulp.task('sass', function() {
	return gulp.src('app/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css/'))
});


gulp.task('default', function(callback) {
	runSequence(['sass', 'copycss'], callback)
});
