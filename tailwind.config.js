/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './src/**/*.{html,js,vue}' ],
	theme: {
		extend: {
			backgroundImage: {
				"Spring-rolls": "url('../../public/sr.jpg')",
				"vbg": "url('../../public/freshchoice-landing-bg.jpeg')",
			}
		}
	},
	plugins: []
};
