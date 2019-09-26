const CleanCSS = require('clean-css');

module.exports = function (config) {

	// LAYOUTS
	config.addLayoutAlias('base', 'layouts/base.ejs');
	config.addLayoutAlias('home', 'layouts/homepage.ejs');
	config.addLayoutAlias('tour', 'layouts/tour.ejs');

	// Minify
	config.addFilter('cssmin', (code) => {
		return new CleanCSS({}).minify(code).styles;
	});

	// pass some assets right through
	config.addPassthroughCopy('source/css');
};
