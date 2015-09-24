/**
 * System imports
 */
import path from 'path';

/**
 * External imports
 */
import gulp from 'gulp';
import tape from 'gulp-tape';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';

const LIB_DIR = path.join(__dirname, 'lib');

const SRC_DIR = path.join(__dirname, 'src');
const SRC_FILES = `${SRC_DIR}/**/*.js`;

const TEST_DIR = path.join(__dirname, 'test');
const TEST_FILES = `${TEST_DIR}/**/*.js`;

const TMP_DIR = path.join(__dirname, '.tmp');

const COMPILED_SRC_DIR = path.join(TMP_DIR, 'src');
const COMPILED_SRC_FILES = `${COMPILED_SRC_DIR}/**/*.js`;

const COMPILED_TEST_DIR = path.join(TMP_DIR, 'test');
const COMPILED_TEST_FILES = `${COMPILED_TEST_DIR}/**/*.js`;

gulp.task('dist', ['test'], () => {
  return gulp.src(COMPILED_SRC_FILES, {base: COMPILED_SRC_DIR})
  .pipe(gulp.dest(LIB_DIR));
});

gulp.task('test', ['compile'], () => {
  return gulp.src(COMPILED_TEST_FILES)
  .pipe(tape());
});


gulp.task('compile', ['lint'], () => {
  return gulp.src([
    SRC_FILES,
    TEST_FILES,
  ], {base: '.'})
  .pipe(babel())
  .pipe(gulp.dest(TMP_DIR));
});

gulp.task('lint', () => {
  return gulp.src([
    SRC_FILES,
    TEST_FILES,
    'gulpfile.babel.js',
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});
