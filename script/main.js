const menu = document.querySelector(".toggle__home");
const navigation = document.querySelector(".navigation__home");

// Clip Handle
const videoClip = document.querySelector(".testClip");

const rippleBtn = document.querySelector(".ripple_contain");

menu.addEventListener("click", () => {
	navigation.classList.toggle("show");
});

rippleBtn.addEventListener("click", () => {
	videoClip.play();
	rippleBtn.style.opacity = "0";
	setTimeout(() => {
		rippleBtn.style.display = "none";
	}, 3000);
});

videoClip.addEventListener("ended", () => {
	rippleBtn.style.opacity = "1";
	setTimeout(() => {
		rippleBtn.style.display = "flex";
	}, 0);
});

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

	breakpoints: {
		// When window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		// When window width is >= 640px
		640: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		// When window width is >= 1024px
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});
