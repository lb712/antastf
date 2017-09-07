
var gulp=require("gulp");

gulp.task('copyall',function(){
	gulp.src('/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\antaaft'));
});


gulp.task("copyimgall",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\antaaft\\img"));
});

gulp.task('copyjsall',function(){
	gulp.src('js/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\antaaft\\js'));
});
gulp.task('copycssall',function(){
	gulp.src('css/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\antaaft\\css'));
});

gulp.task('copyfontall',function(){
	gulp.src('font/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\antaaft\\font'));
});
gulp.task('copyfont1all',function(){
	gulp.src('font/**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\antaaft\\font1'));
});
gulp.task('watch',function(){
	
	gulp.watch('js/**/*',['copyjsall']);
	 gulp.watch('css/**/*',['copycssall']);
	 gulp .watch('img/**/*',['copyimgall']);
	  gulp.watch('font/**/*',['copyfontall']);
 	
});