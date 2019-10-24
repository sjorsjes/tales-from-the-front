const atImport = require('postcss-import');
const mediaVariables = require('postcss-media-variables');
const customProperties = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const mqPacker = require('css-mqpacker');
const cssnano = require('cssnano');

module.exports = {
	plugins: [
		atImport(),
		mediaVariables(),
		customMedia(),
		customProperties({
			preserve: false,
		}),
		mediaVariables(),
		// mqPacker(),
		cssnano({
			preset: 'default',
		}),
	],
};
