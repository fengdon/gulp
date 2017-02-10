/**
 * Created by Administrator on 2017/2/9.
 */
/*gulp就是机械化的完成重复性工作 gulp的机制就是将重复工作抽象成一个个的任务  gulp的主文件，用于注册任务*/

'use strict'
/*此处代码都是由node执行的*/
/*载入gulp的模块*/
var gulp=require('gulp');
/*注册一个任务*/
// 注册一个任务
gulp.task('copy', function() {
    // 当gulp执行这个say任务时会自动执行该函数
    // console.log('hello world');
    // 合并 压缩之类的操作
    // 复制文件
    // gulo.src取一个文件
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/')); // 将此处需要的操作传递进去
});
gulp.task('dis',function(){
    gulp.watch('src/index.html',['copy']); // 将此处需要的操作传递进去
});


var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

