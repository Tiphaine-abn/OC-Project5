document.addEventListener("DOMContentLoaded", function () { // Attache un gestionnaire d'événements au document. Se déclenche une fois que le DOM est complètement chargé. Fonction anonyme s'exécute.
	// Récupération des flèches et de la bannière pour pouvoir les modifiers
	const arrowLeft = document.querySelector(".arrow_left");
	console.log(arrowLeft)
	const arrowRight = document.querySelector(".arrow_right");
	console.log(arrowRight)
	let bannerImg = document.getElementById("banner-img"); // Utilisation d'un ID.
	console.log(bannerImg) //Affiche la référence de l'élément dans la console pour vérifier qu'il a été correctement sélectionné.
	const tagLine = document.getElementById("tag-line"); // Utilisation d'un ID.

	// Initialisation de l'index courant
	let currentIndex = 0; // Variable représentant l'index (ou la position) actuelle dans une séquence. = 0 affecte la valeur initiale de la variable à 0. Lorsque la variable est créée, elle commence avec une valeur de 0.

	// Liste des slides du carrousel (index)
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
	// Fin du tableau
	// Déclaration d'une variable (slides) avec constante (valeur qui ne change pas). L'identifiant slides sera toujours associé au même tableau.

	// Ajout des event listeners sur les flèches
	arrowRight.addEventListener("click", function () { // Attache un gestionnaire d'événements click à arrowRight.
		currentIndex = (currentIndex + 1) % slides.length; // Incrémente currentIndex (valeur initiale) de 1 pour passer à l'image suivante. % slides.length utilise opérateur modulo (valeur entre 0 et 3 car slides.length === 4) qui retourne à 0 après avoir atteint la fin du tableau slides. Boucle le carrousel sans dépasser les limites du tableau. 
		updateCarousel(currentIndex); // Met à jour le carrousel pour afficher l'image correspondant à currentIndex.
		console.log("Current Index : " + currentIndex); // Concatène la chaîne "Current Index : " avec la valeur de currentIndex pour afficher l'index actuel dans la console. === Débogage.
	});
	// Lorsqu'un utilisateur clique sur l'élément flèche, une fonction est exécutée pour mettre à jour l'index actuel du carrousel et afficher la nouvelle image.

	arrowLeft.addEventListener("click", function () {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Décrémente currentIndex de 1 pour passer à l'image précédente. + slides.length : Ajoute la longueur du tableau slides pour s'assurer que le résultat est positif, même si currentIndex est 0.
		// % slides.length : Utilise modulo pour s'assurer que currentIndex retourne à la fin du tableau si currentIndex - 1 est négatif. Boucle le carrousel en arrière.
		updateCarousel(currentIndex);
		console.log("Current Index : " + currentIndex);
	});

	// Générer les bullet points
	const dotsContainer = document.querySelector(".dots"); // Sélection du sélecteur CSS "dots" dans le DOM. Stocke la référence à cet élément dans la variable dotsContainer.
	slides.forEach((slide, index) => { // Parcourt chaque élément du tableau slides + Fonction fléchée qui sera exécutée pour chaque élément du tableau.
		const dot = document.createElement("span"); // Crée un nouvel élément HTML <span> et stocke la référence à cet élément dans la variable dot.
		dot.classList.add("dot"); // Ajoute la classe CSS dot à l'élément "dot" pour le styliser avec les règles CSS associées.
		if (index === 0) { // Vérifie si l'indice de l'élément actuel est 0.
			dot.classList.add("dot_selected"); // Si la condition est vraie, ajoute la classe CSS "dot_selected" à l'élément dot.
		}
		dotsContainer.appendChild(dot); // Ajoute l'élément dot en tant qu'enfant de l'élément. Insère le point dans le conteneur.
	});
	// Permettent aux utilisateurs de savoir quelle image est actuellement affichée et de naviguer entre les images.

	// Fonction pour mettre à jour l'image affichée, le texte de la tagline, et les points de navigation actuellement sélectionnés.
	function updateCarousel(currentIndex) { // Déclare une fonction nommée updateCarousel qui prend un argument currentIndex. Cet argument représente l'index de l'image à afficher dans le carrousel.
		bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`; // Modifie la source (src) de l'élément image de la bannière. Template Literal (${}) : Utilise une chaîne de caractères template pour insérer dynamiquement la propriété image de l'objet slide actuel.
		tagLine.innerHTML = slides[currentIndex].tagLine; // Modifie le contenu HTML de l'élément contenant la tagline. Utilise la propriété tagLine de l'objet slide actuel pour mettre à jour le texte affiché sous l'image.
		const dots = document.querySelectorAll(".dot"); // Stocke la NodeList des éléments dot dans la variable dots.
		dots.forEach((dot, index) => { // Parcourt chaque élément dot dans la NodeList dots. Prend deux arguments : dot, l'élément actuel, et index, l'index de l'élément dans la NodeList.
			if (index === currentIndex) { // Vérifie si l'index de l'élément actuel est égal à currentIndex (c'est-à-dire si ce point de navigation correspond à l'image actuellement affichée).
				dot.classList.add("dot_selected"); // Si la condition est vraie, ajoute la classe CSS.
			} else {
				dot.classList.remove("dot_selected"); // Si la condition est fausse, retire la classe CSS de l'élément dot. Désélectionne le point.
			}
		});
	}
});