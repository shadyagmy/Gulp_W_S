var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');sss
var concat = require('gulp-concat');

//Copy All HTML Files
gulp.task('copyHTML', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
})

//Optimize Images
gulp.task('imagemin', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('css', function () {
    return gulp.src('src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})
            .on('error', sass.logError)
        )
        .pipe(prefix("last 5 version"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
});


gulp.task('scripts', function() {
    return gulp.src("src/js/*.js")
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'))
      
      
});



gulp.task('default', ["copyHTML", "css", "imagemin", "scripts"]);

gulp.task('watch', function() {
    gulp.watch('src/*.html', ['copyHTML']);
    gulp.watch('src/img/*', ['imagemin']);
    gulp.watch('src/sass/**/*.scss', ['css']);
    gulp.watch('src/js/*.js', ['scripts']);

})














// gulp.task('watch', function () {
//     require('./server');
//     gulp.watch('sass/**/*.scss', ['css']);
// })

// gulp.task('stream', function () {
//     require('./server');
//     return watch('sass/**/*.scss', ['css'])
        
// });