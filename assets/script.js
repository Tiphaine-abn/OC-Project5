/* Variables globales */

// Position de départ du slider
let currentIndex = 0;

// Liste des slides du carrousel
const slides = [
	{
		"image": "slide1.jpg", // 0
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg", // 1
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg", // 2
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png", // 3
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
console.log("slides : ", slides);

/* Etape 1: Récupération des éléments du DOM */
const img = document.querySelector(".banner-img");
console.log("IMG : ", img);
const p = document.querySelector(".tagLine");
console.log("tagLine :", p)
const arrowLeft = document.querySelector(".arrow_left");
console.log("arrowLeft : ", arrowLeft)
const arrowRight = document.querySelector(".arrow_right");
console.log("arrowRight : ", arrowRight)
const dots = document.querySelector(".dots");
console.log("dots : ", dots);
// sélection des éléments nécessaire au fonctionnement du carrousel et les affiche dans la console pour vérification.

/* Etape 3. Ajout des bullet points au slider */
// Initialisation des dots
for (let index = 0; index < slides.length; index++) {
	const dotDiv = document.createElement("div");
	dotDiv.classList.add("dot");
	if (index == 0) {
		dotDiv.classList.add("dot_selected");
	}
	dots.appendChild(dotDiv);
}
// génère des points pour chaque diapositive et met en évidence le premier.

/* Etapes 2, 4 et 5 : Ajout des Event Listeners sur les flèches; Modification du slide au clic ; Défilement infini sur le carrousel */
// Flèche droite
arrowRight.addEventListener("click", () => {
	console.log("La flèche droite est cliquée !");
	console.log("clickRight avec idx = ", currentIndex);
	const slideDots = document.querySelectorAll(".dots .dot");
	slideDots[currentIndex].classList.remove("dot_selected");
	currentIndex++;
	if (currentIndex > slides.length - 1) {
		currentIndex = 0
	}
	slideDots[currentIndex].classList.add("dot_selected");
	// Mise à jour de l'image et de la légende
	img.src = "/assets/images/slideshow/" + slides[currentIndex].image;
	p.innerHTML = slides[currentIndex].tagLine;
	console.log("idx final = ", currentIndex);
	console.log(slideDots);
})
// fonction qui permet de naviguer vers la diapositive suivante et de mettre à jour les points de navigation et le contenu affiché.

// Flèche gauche
arrowLeft.addEventListener("click", () => {
	console.log("La flèche gauche est cliquée !");
	console.log("clickLeft avec idx = ", currentIndex);
	const slideDots = document.querySelectorAll(".dots .dot");
	slideDots[currentIndex].classList.remove("dot_selected");
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1
	}
	slideDots[currentIndex].classList.add("dot_selected");
	// Mise à jour de l'image et de la légende
	img.src = "/assets/images/slideshow/" + slides[currentIndex].image;
	p.innerHTML = slides[currentIndex].tagLine;
	console.log("idx final = ", currentIndex);
	console.log(slideDots);
})
// fonction qui permet de naviguer vers la diapositive précédente et de mettre à jour les points de navigation et le contenu affiché.
