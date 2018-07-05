var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
//var eslint = require('gulp-eslint');
//var jasmine = require('gulp-jasmine-phantom');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jsArray=[
	'js/jquery.js',
	'js/main.js',
	'js/sc.js'
];
var cssArray=[
	'sass/css/normalize.css',
	'sass/css/style.css',
];

gulp.task('scripts', function(done) {
	gulp.src(jsArray)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/js'));
	done();
});

gulp.task('scripts-dist', function(done) {
	gulp.src (jsArray)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
	done();
});

gulp.task('copy_html', function(done) {
	gulp.src('./index.html')
		.pipe(gulp.dest('./dist'));
	done();
});

gulp.task('copy-images', function(done) {
	gulp.src('img/*')
		.pipe(gulp.dest('dist/img'));

	done();
});




gulp.task('styles', function(done) {
	gulp.src(cssArray)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('dist/css'));
	done();
});



gulp.task('default',
		  gulp.series('copy_html', 'copy-images', 'styles' , 'scripts',
					   function(done) {
							done();
					   }
					),
			function(done) {
				gulp.watch(cssArray, ['styles']);
				gulp.watch(jsArray, ['scripts']);
				gulp.watch('/index.html', ['copy_html']);
			}
			
);

gulp.task('dist', gulp.series('copy_html','copy-images','styles','scripts-dist', function(done) {done(); }));