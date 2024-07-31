document.addEventListener("DOMContentLoaded", () => {
	const menuToggle = document.getElementById("menu-toggle");
	const navMenu = document.getElementById("nav-menu");
	const menuIcon = document.querySelector(".menu-icon use");
	const copyRight = document.querySelector("#copyright_text");

	copyRight.textContent = `© ${new Date().getFullYear()} All Right Reserved | Built by Samson Dada | 👋🏽`;

	let menuOpen = false;
	const toggleMenu = () => {
		menuOpen = !menuOpen;
		navMenu.classList.toggle("-translate-x-full", !menuOpen);
		menuIcon.setAttribute(
			"xlink:href",
			menuOpen
				? "icons/Material-icon.svg#icon-cancel"
				: "icons/Material-icon.svg#icon-menu"
		);
	};

	menuToggle.addEventListener("click", toggleMenu);

	const navLinks = document.querySelectorAll(".nav__link");

	navLinks.forEach((link, index) => {
		link.addEventListener("click", function (event) {
			event.preventDefault();
			const targetId = this.getAttribute("href").substring(1);
			console.log("targetId", targetId);
			const targetSection = document.getElementById(targetId);
			console.log("targetSection", targetSection);

			if (menuOpen) {
				toggleMenu();
			}

			window.scrollTo({
				top: targetSection.offsetTop,
				behavior: "smooth",
			});
		});
	});
});
