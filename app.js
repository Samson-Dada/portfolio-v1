document.addEventListener("DOMContentLoaded", () => {
	const menuToggle = document.getElementById("menu-toggle");
	const navMenu = document.getElementById("nav-menu");
	const menuIcon = document.getElementById("menu-icon");
	const copyRight = document.querySelector("#copyright_text");

	copyRight.textContent = `© ${new Date().getFullYear()} Samson Dada. All rights reserved.`;

	let menuOpen = false;

	const toggleMenu = () => {
		menuOpen = !menuOpen;
		navMenu.classList.toggle("-translate-x-full", !menuOpen);
		menuIcon.textContent = menuOpen ? "close" : "menu"; // Change between 'close' and 'menu' icons
	};

	menuToggle.addEventListener("click", toggleMenu);
});
