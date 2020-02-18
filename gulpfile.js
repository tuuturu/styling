const { series, src, dest, watch } = require('gulp')
const concat = require('gulp-concat')
const del = require('delete')

function buildStyles() {
	return src([
		'source/scss/variables.scss',
		'source/scss/palette.scss',
		'source/scss/mixins.scss',
		'source/scss/base.scss',
	])
		.pipe(concat('style.scss'))
		.pipe(dest('dist/'))
}

function clean(cb) {
  // remove this
	del(['dist/'], cb)
}

function dev() {
  return watch('source/**/*.scss', buildStyles)
}

exports.build = buildStyles
exports.clean = clean
exports.watch = dev
exports.default = series(clean, buildStyles)
