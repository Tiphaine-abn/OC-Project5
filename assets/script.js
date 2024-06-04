const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.addEventListener("DOMContentLoaded", function () {
	// Récupération des flèches et de la bannière pour pouvoir les modifiers
	const arrowLeft = document.querySelector(".arrow_left");
	console.log(arrowLeft)
	const arrowRight = document.querySelector(".arrow_right");
	console.log(arrowRight)
	let bannerImg = document.getElementById("banner-img");
	console.log(bannerImg)

	// Liste des slides du carrousel
	const slides = [
		"./assets/images/slideshow/slide1.jpg",
		"./assets/images/slideshow/slide2.jpg",
		"./assets/images/slideshow/slide3.jpg",
		"./assets/images/slideshow/slide4.png"
	];

	// Ajout des event listeners sur les flèches
	arrowRight.addEventListener("click", function () {
		currentIndex = (currentIndex + 1) % slides.length;
		updateCarousel(currentIndex);
	});

	arrowLeft.addEventListener("click", function () {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		updateCarousel(currentIndex);
	});

	// Générer les bullet points
	const dotsContainer = document.querySelector(".dots");
	slides.forEach((slide, index) => {
		const dot = document.createElement("span");
		dot.classList.add("dot");
		if (index === 0) {
			dot.classList.add("dot_selected");
		}
		dotsContainer.appendChild(dot);
	});

	// Fonction pour mettre à jour l'image affichée et les bullet points actifs
	function updateCarousel(currentIndex) {
		bannerImg.src = slides[currentIndex];
		const dots = document.querySelectorAll(".dot");
		dots.forEach((dot, index) => {
			if (index === currentIndex) {
				dot.classList.add("dot_selected");
			} else {
				dot.classList.remove("dot_selected");
			}
		});
	}

	// Initialisation de l'index courant
	let currentIndex = 0;
});