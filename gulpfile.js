var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var minifyCSS    = require('gulp-clean-css');
var minifyHTML   = require('gulp-minify-html');
var uglify       = require('gulp-uglify');
var uncss        = require('gulp-uncss');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var replace      = require('gulp-replace');
var notify       = require('gulp-notify');
var prefix       = require('gulp-autoprefixer');
var cp           = require('child_process');
var fs           = require('fs');
var ghPages      = require('gulp-gh-pages');
var extract      = require('gulp-html-extract');
var jekyll       = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages     = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build', '--config', '_config.yml'], {stdio: 'inherit'})
        .on('close', done);
});



/**
 * Rebuild Jekyll & do page reload
 */
 gulp.task('jekyll-rebuild', ['optimize-html'], function () {
     browserSync.reload();
 });

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['optimize-html'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('optimize-css', ['jekyll-build'], function () {
    return gulp.src('_site/main.css')
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(rename('all.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
});


gulp.task('optimize-js', ['optimize-css'], function() {
     return gulp.src([
                      'js/js-holder.js',
                      'js/js-tether.js',
                      'js/js-easing.js',
                      'js/js-waypoint.js',
                      'js/js-custom.js'
                    ])
            .pipe(concat('all.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('_site/js'));
});

gulp.task('optimize-html', ['optimize-js'], function() {
	return gulp.src('_site/**/*.html')
    .pipe(minifyHTML({
      quotes: true
    }))
     .pipe(gulp.dest('_site/'));
});

/**
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_sass/**/*.scss',
                '*.scss',
                'js/*.js',
                '*.html',
                '*.md',
                '**/*.md',
                '_layouts/*.html',
                '_includes/**/*.html',
                '_data/*.yaml',
                '_includes/*.svg',
                '_posts/*'], ['jekyll-rebuild']);
});





/**
* Create production-ready website
*/
/**
 * Build the Jekyll Site
 */


gulp.task('jekyll-build-prod', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build', '--config', '_config.yml,_config.prod.yml'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('optimize-css-prod', ['jekyll-build-prod'], function () {
    return gulp.src('_site/main.css')
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(rename('all.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('_public/css'))
        .pipe(browserSync.reload({stream:true}))
});


gulp.task('optimize-js-prod', ['optimize-css-prod'], function() {
     return gulp.src([
                      'js/js-holder.js',
                      'js/js-tether.js',
                      'js/js-easing.js',
                      'js/js-video.js',
                      'js/js-waypoint.js',
                      'js/js-custom.js'
                    ])
            .pipe(concat('all.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('_public/js'));
});

gulp.task('optimize-html-prod', ['optimize-js-prod'], function() {
  return gulp.src('_site/**/*.html')
    .pipe(minifyHTML({
      quotes: true
    }))
     .pipe(gulp.dest('_public/'));
});


gulp.task('optimize-images-prod', function() {
 return gulp.src('_site/images/**/*')
     .pipe(gulp.dest('_public/images/'))
    .pipe(notify({ message: 'IMG-PROD task complete' }));

});

gulp.task('optimize-root-images-prod', function() {
 return gulp.src(['_site/*.png', '_site/*.jpg', '_site/*.ico'])
     .pipe(gulp.dest('_public'))
    .pipe(notify({ message: 'IMG-root-PROD task complete' }));

});








/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

/** 
Prod Task NOT CURRENTLY WORKING
**/

gulp.task('prod', ['optimize-html-prod', 'optimize-images-prod', 'optimize-root-images-prod']);

