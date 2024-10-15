/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			red: '#f00',
			white: colors.white,
			black: colors.black,
			purple: {
				400: '#cc3cb7',
				600: '#b631b1',
				800: '#8f1eaa',
			},
		},
		backgroundImage: {
			banner: 'url("/assets/banner.jpg")',
		},
		extend: {},
	},
	plugins: [],
};
