/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: colors.white,
			black: colors.black,
			purple: {
				400: '#cc3cb7',
				600: '#b631b1',
			},
		},
		backgroundImage: {
			banner: 'url("/assets/banner.jpg")',
		},
		extend: {},
	},
	plugins: [],
};
