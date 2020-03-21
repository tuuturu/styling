const { series, src, dest } = require('gulp')
const concat = require('gulp-concat')
const del = require('delete')

function buildStyles() {
	return src([
		'source/scss/variables.scss',
		'source/scss/theme.scss',
		'source/scss/palette.scss',
		'source/scss/mixins.scss',
		'source/scss/base.scss',
	])
		.pipe(concat('style.scss'))
		.pipe(dest('dist/'))
}

function clean(cb) {
	del(['dist/'], cb)
}

exports.build = buildStyles
exports.clean = clean
exports.default = series(clean, buildStyles)
