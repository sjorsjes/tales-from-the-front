module.exports = function (config) {

	// LAYOUTS
	config.addLayoutAlias('base', 'layouts/base.ejs');
	config.addLayoutAlias('home', 'layouts/homepage.ejs');
	config.addLayoutAlias('tour', 'layouts/tour.ejs');

	config.addPassthroughCopy('/css/**/*.min.css');
};
