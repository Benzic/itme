var gulp = require("gulp"),
	cleancss = require("gulp-clean-css"),
	livereload = require("gulp-livereload"),
	sass = require("gulp-sass")
	browserSync = require('browser-sync').create();


gulp.task("css",function(){

	gulp.src("./css/*.css")
		.pipe(cleancss())
		.pipe(gulp.dest("./dist/css"))
		.pipe(livereload())
});

gulp.task("watch",function(){
	 // 建立浏览器自动刷新服务器
    browserSync.init({
        server: {
            baseDir: "project"
        }
    });
	livereload.listen();
	gulp.watch("./css/*.css",["css"])
	gulp.watch("./scss/*.scss",["sass"])
	// 自动刷新
    gulp.watch('project/**', function() {
        browserSync.reload();
    });
})

gulp.task("sass", function(){
	gulp.src("./scss/*.scss")
		.pipe(sass()) // 编译 sass
		.pipe(cleancss())
		.pipe(gulp.dest("dist/css"))
		.pipe(livereload())
});