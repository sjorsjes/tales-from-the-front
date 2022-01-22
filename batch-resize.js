const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDirectory = './source/img/visuals';
const outputDirectory = './dist/img/visuals';

const fileSizes = [null, 320, 1100, 1650, 1980];
const files = fs.readdirSync(inputDirectory);

const checkDir = (dir) => {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}

	console.log(__dirname);
	console.log(process.cwd());
	console.log(path.join(__dirname, outputDirectory))
}

const resizeImage = async (fileName, fileSize) => {
	const name = fileSize
		? fileName.replace(/(\.[\w\d_-]+)$/i, `-${fileSize}w$1`)
		: fileName;

	console.log('Resize ', name);

	await sharp(`${inputDirectory}/${fileName}`)
		.resize({ width: fileSize })
		.toFile(`${outputDirectory}/${name}`);
}

const processImages = async () => {
	const resizePromises = [];

	checkDir(outputDirectory);

	files.forEach((fileName) => {
		fileSizes.forEach((fileSize) => {
			resizePromises.push(resizeImage(fileName, fileSize));
		});
	})

	await Promise.allSettled(resizePromises);
}

processImages();

console.log('All files: ', fs.readdirSync(inputDirectory));
