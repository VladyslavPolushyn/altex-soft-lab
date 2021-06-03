'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
	return gulp.src('./hw1/assets/sass/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('./hw1/assets/css'));
});

gulp.task('sass', () => {
	return gulp.src('./hw2/assets/sass/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('./hw2/assets/css'));
});

gulp.task('watch', () => {
	gulp.watch('./hw1/assets/sass/main.sass', gulp.series('sass'));
});