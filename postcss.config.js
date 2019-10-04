const cssnano = require('cssnano');
const customProperties = require('postcss-custom-properties');
const atImport = require('postcss-import');
const mqPacker = require('css-mqpacker');

module.exports = {
	plugins: [
		atImport(),
		customProperties({
			preserve: false,
		}),
		mqPacker(),
		cssnano({
			preset: 'default',
		}),
	],
};
