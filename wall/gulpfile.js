    

    /**
    *
    *   Gulp File - Javascript Management
    *   
    *   - This file handles the Javascript & SCSS Compiling & Minification
    *
    **/

    var gulp            = require('gulp');
    var concat          = require('gulp-concat');
    var uglify          = require('gulp-uglify');
    var watch           = require('gulp-watch');
    var plumber         = require('gulp-plumber');
    var postcss         = require('gulp-postcss');
    var autoprefixer    = require('autoprefixer');
    var sass            = require('gulp-sass');
    var glob            = require('gulp-sass-bulk-import');



    //Compile Styles
    gulp.task('styles', function(finish){

        //Compile Main Styles
        gulp.src('scss/main.scss')
            .pipe(plumber())
            .pipe(glob())
            .pipe(sass({ outputStyle: 'compressed' }).on('error' , sass.logError ) )
            .pipe(postcss([ autoprefixer ]))
            .pipe(gulp.dest('css/'));

        finish();

    });



    //Watch for Changes
    gulp.task('watch', function(finish){

        gulp.watch('scss/**/*.scss', gulp.series('styles') );
        
        finish();
        
    });






    /**
    *
    *   TASK: default
    *       - This kicks the script off and loads all previous tasks
    *
    **/
    gulp.task( 'default' , gulp.parallel('watch', 'styles') );


