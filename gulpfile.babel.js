/**
 * System imports
 */
import path from 'path';

/**
 * External imports
 */
import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';

const LIB_DIR = path.join(__dirname, 'lib');
const SRC_DIR = path.join(__dirname, 'src');
const ES6_FILES = `${SRC_DIR}/**/*.js`;

gulp.task('compile', ['lint'], () => {
  gulp.src(ES6_FILES, {base: SRC_DIR})
  .pipe(babel())
  .pipe(gulp.dest(LIB_DIR));
});

gulp.task('lint', () => {
  gulp.src([
    ES6_FILES,
    'gulpfile.babel.js',
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});
