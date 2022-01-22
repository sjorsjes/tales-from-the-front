const fs = require('fs');
const sharp = require('sharp');

const inputDirectory = './source/img/visuals';
const outputDirectory = './dist/img/visuals';
const sizes = [null, 320, 1100, 1650, 1980];

const files = fs.readdirSync(inputDirectory);

console.log(files);

const processImages = async () => {
	const metadata = await sharp(`${inputDirectory}/${files[0]}`).metadata();

	console.log(metadata);
}

processImages();

// sharp.cache({ files : 0 });

// fs.readdirSync(inputDirectory)
// 	.forEach(async (file) => {
// 		return Promise.all(
// 			sizes.map((size, i) =>{
// 				if (!size) {
// 					return sharp(`${inputDirectory}/${file}`)
// 						.toFile(`${outputDirectory}/${file}.jpg`);
// 				}

// 				return sharp(`${inputDirectory}/${file}`)
// 					.resize({ width: size })
// 					.toFile(`${outputDirectory}/${file}-${size}.jpg`);
// 			})
// 		);
// 	});
