module.exports = function (config) {

	// LAYOUTS
	config.addLayoutAlias('base', 'layouts/base.njk');
	config.addLayoutAlias('home', 'layouts/homepage.njk');
	config.addLayoutAlias('tour', 'layouts/tour.njk');

	config.addCollection('upcomingTour', function (collection) {
		const col = collection.getFilteredByTag('tours');
		const last = col[col.length - 1];
		const hasUpcomingTour = Date.now() < new Date(last.data.date).getTime();

		return hasUpcomingTour ? [last] : [];
	});

	config.addFilter('formatDate', function (value) {
		const date = new Date(value);
		const day = ('0' + date.getDate()).slice(-2);
		const month = ('0' + (date.getMonth() + 1)).slice(-2);
		const year = date.getFullYear();

		return `${day}-${month}-${year}`;
	});

	config.addPassthroughCopy('./source/img');
	config.addPassthroughCopy('./source/css/**/*.min.css');
};
