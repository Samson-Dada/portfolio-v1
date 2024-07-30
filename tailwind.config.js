/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}", "./src/style.css"],

	theme: {
		fontFamily: {
			baloo: ['"Baloo Paaji 2"', "cursive", "sans-serif"],
		},
		extend: {
			colors: {
				"background-color": "#f0f4f9",
				primary: "bg-blue-600",
			},
		},
	},
	plugins: [],
};
