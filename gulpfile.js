var gulp = require("gulp"),
	cleancss = require("gulp-clean-css"),
	livereload = require("gulp-livereload"),
	sass = require("gulp-sass");


gulp.task("css",function(){

	gulp.src("./css/*.css")
		.pipe(cleancss())
		.pipe(gulp.dest("./dist/css"))
		.pipe(livereload())
});

gulp.task("watch",function(){
	livereload.listen();
	gulp.watch("./css/*.css",["css"])
	gulp.watch("./scss/*.scss",["sass"])
})
gulp.task("sass", function(){
	gulp.src("./scss/*.scss")
		.pipe(sass()) // 编译 sass
		.pipe(cleancss())
		.pipe(gulp.dest("dist/css"))
		.pipe(livereload())
});