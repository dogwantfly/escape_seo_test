var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('default', function () {
    return gulp.src('./css/bootstrap.min.css')
        .pipe(uncss({
            html: ['index.html', 'course_js.html', 'courses.html', 'signin.html']
        }))
        .pipe(gulp.dest('./style'));
});