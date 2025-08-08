const swiper = new Swiper(".swiper", {
	loop: true,
	graBCursor: true,
	spaceBetween: 10,
	slidesPerView: "3",

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".next",
		prevEl: ".prev",
	},
});
