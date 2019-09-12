const CleanCSS = require('clean-css');

module.exports = function (config) {

	// LAYOUTS
	config.addLayoutAlias('base', 'layouts/base.njk');
	config.addLayoutAlias('home', 'layouts/homepage.njk');
	config.addLayoutAlias('tour', 'layouts/tour.njk');

	// Minify
	config.addFilter('cssmin', function(code) {
		return new CleanCSS({}).minify(code).styles;
	});

	// pass some assets right through
	config.addPassthroughCopy('source/css');
};
