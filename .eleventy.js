const CleanCSS = require('clean-css');

module.exports = function (config) {

	// LAYOUTS
	config.addLayoutAlias('base', 'layouts/base.njk');
	config.addLayoutAlias('home', 'layouts/homepage.njk');
	config.addLayoutAlias('tour', 'layouts/tour.njk');

	// CUSTOM
	config.addCollection('navigation', function(collection) {
		const collections = collection.getAll();

		return collections.filter(collection => { collection.data.nav === true });
	});

	// Minify
	config.addFilter('cssmin', function(code) {
		return new CleanCSS({}).minify(code).styles;
	});

	// pass some assets right through
	config.addPassthroughCopy('source/css');
};
