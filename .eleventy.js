const addPrevNext = function(collectionArray) {
	const l = collectionArray.length;

	for (let p = 0; p < l; p++) {
	  if (p > 1)
		collectionArray[p].data.previous = {
			title: collectionArray[p - 1].data.title,
			url: collectionArray[p - 1].url
		};
	  if (p < l - 1)
		collectionArray[p].data.next = {
			title: collectionArray[p + 1].data.title,
			url: collectionArray[p + 1].url
		};
	}

	return collectionArray;
}

module.exports = function (config) {

	// LAYOUTS
	config.addLayoutAlias('base',			'layouts/base.njk');
	config.addLayoutAlias('home',			'layouts/homepage.njk');
	config.addLayoutAlias('tour',			'layouts/tour.njk');
	config.addLayoutAlias('tourOverview',	'layouts/tour-overview.njk');

	config.addFilter('formatDate', function (value) {
		const date = new Date(value);
		const day = ('0' + date.getDate()).slice(-2);
		const month = ('0' + (date.getMonth() + 1)).slice(-2);
		const year = date.getFullYear();

		return `${day}-${month}-${year}`;
	});

	config.addCollection('upcomingTour', function (collection) {
		const col = collection.getFilteredByTag('tours');
		const last = col[col.length - 1];
		const hasUpcomingTour = Date.now() < new Date(last.data.date).getTime();

		return hasUpcomingTour ? [last] : [];
	});

	config.addCollection('myTours', collection => addPrevNext(collection.getFilteredByTag('tours')));

	config.addPassthroughCopy('./source/img');
	config.addPassthroughCopy('./source/css/**/*.min.css');
};
