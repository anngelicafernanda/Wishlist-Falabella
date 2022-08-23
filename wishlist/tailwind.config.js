/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			orange: '#EE5601',
			orangeButton: '#FF6200',
			white: '#FFFFFF',
			orangeFalabella: '#FF8D01',
			'gray-light': '#EEEEEE',
			'gray-search': '#EDEDED',
			'search-font': '#465562',
			'slate-300': 'rgb(203 213 225)',
			body: '#F6F6F6',
			'lists-layout': '#979797',
			black: '#000000',
			info: '#4A4A4A',
			container: '#F5F5F5',
			copyright: '#181818',
			textCopyright: '#848484',
			footer:'#222222',
			btnlista:"#495867",
			alert: '#FAFAFA',
			bgAlert: '#4A4A4A',
		},
		fontFamily: {
			lato: ['Lato', 'sans-serif'],
		},

		extend: {},
	},
	plugins: [],
};
