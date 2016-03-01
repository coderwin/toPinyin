var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task("uglify", function(){
	gulp.src("./jsToPinyin.js")
	.pipe(uglify())
	.pipe(rename({suffix: '.min' }))
	.pipe(gulp.dest("./build/"))
	
});
gulp.task('default',["uglify"]);
