module.exports = function(config) {

	// LAYOUTS
	config.addLayoutAlias('base', 'layouts/base.njk');
	config.addLayoutAlias('home', 'layouts/homepage.njk');
	config.addLayoutAlias('tour', 'layouts/tour.njk');

	// pass some assets right through
	config.addPassthroughCopy('source/css');
};