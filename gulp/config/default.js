import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const sourseFolder = './src';
const buildFolder = './dist';

export const defaultPath = {
	config: {
		buildFolder: buildFolder,
		sourseFolder: sourseFolder,
		rootFolder: rootFolder,
		pug: false,
	},
	sourse: {
		pages: `${sourseFolder}/pages/**/*.{html,pug}`,
		images: `${sourseFolder}/images/**/*.{png,svg,jpg,webp,ico}`,
		styles: `${sourseFolder}/styles/main.scss`,
		fonts: `${sourseFolder}/fonts/**/*.{otf,woff,woff2,eot,ttf}`,
		scripts: `${sourseFolder}/scripts/app.js`,
	},
	build: {
		pages: `${buildFolder}/`,
		images: `${buildFolder}/assets/img/`,
		styles: `${buildFolder}/assets/css/`,
		fonts: `${buildFolder}/assets/fonts/`,
		scripts: `${buildFolder}/assets/js/`,
	},
	watch: {
		pages: [
			`${sourseFolder}/pages/**/*.{html,pug}`
		],
		images: `${sourseFolder}/images/**/*.{png,svg,jpg,webp,ico}`,
		styles: [
			`${sourseFolder}/styles/main.scss`
		],
		scripts: `${sourseFolder}/scripts/**/*.js`,
	},
};
