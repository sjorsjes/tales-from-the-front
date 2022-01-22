const fs = require('fs');
const sharp = require('sharp');

const inputDirectory = './source/img/visuals';
const outputDirectory = './dist/img/visuals';

const fileSizes = [null, 320, 1100, 1650, 1980];
const files = fs.readdirSync(inputDirectory);

const resizeImage = async (fileName, fileSize) => {
	const name = fileSize
		? fileName.replace(/(\.[\w\d_-]+)$/i, `-${fileSize}w$1`)
		: fileName;

	await sharp(`${inputDirectory}/${fileName}`)
		.resize({ width: fileSize })
		.toFile(`${outputDirectory}/${name}`);
}

const processImages = async () => {
	const resizePromises = [];

	files.forEach((fileName) => {
		fileSizes.forEach((fileSize) => {
			resizePromises.push(resizeImage(fileName, fileSize));
		});
	})

	await Promise.allSettled(resizePromises);
}

processImages();
