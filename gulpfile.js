/**
 * Created by Administrator on 2017/2/9.
 */
/*gulp���ǻ�е��������ظ��Թ��� gulp�Ļ��ƾ��ǽ��ظ����������һ����������  gulp�����ļ�������ע������*/

'use strict'
/*�˴����붼����nodeִ�е�*/
/*����gulp��ģ��*/
var gulp=require('gulp');
/*ע��һ������*/
// ע��һ������
gulp.task('copy', function() {
    // ��gulpִ�����say����ʱ���Զ�ִ�иú���
    // console.log('hello world');
    // �ϲ� ѹ��֮��Ĳ���
    // �����ļ�
    // gulo.srcȡһ���ļ�
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/')); // ���˴���Ҫ�Ĳ������ݽ�ȥ
});
gulp.task('dis',function(){
    gulp.watch('src/index.html',['copy']); // ���˴���Ҫ�Ĳ������ݽ�ȥ
});


var browserSync = require('browser-sync').create();

// ��̬������
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

