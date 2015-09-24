# es6-package-starter
A starter repository for ES6 NPM packages.

## Usage
```sh
git clone https://github.com/francisbrito/es6-package-starter
npm install
```

### Tasks
* `gulp lint` lints files at `src` and `test` directories.
* `gulp compile` transpiles ES6 files at `src` and `test` to ES5. Copies them to `.tmp`
* `gulp test` tests files at `test` directory using `tape`.
* `gulp dist` copies files at `.tmp/src` into `lib` directory.
