const nextButton = document.querySelector(".btn__next");
const prevButton = document.querySelector(".btn__prev");
const imageList = document.querySelector(".profile__image-list");
const contentList = document.querySelector(".profile__content-list");

// Flag set to 0
let profileIndex = 0;

nextButton.addEventListener("click", () => {
	let currentImage, prevImage, nextImage;
	let content = contentList.children[profileIndex];

	currentImage = imageList.children[profileIndex];

	// check if at end or beg of array to reset classes
	if (profileIndex == 0 || profileIndex == imageList.children.length - 1) {
		if (profileIndex == 0) {
			prevImage = imageList.children[imageList.children.length - 1];
			nextImage = imageList.children[profileIndex + 1];

		} else {
			prevImage = imageList.children[profileIndex - 1];
			nextImage = imageList.children[profileIndex];
		}

	} else {
		prevImage = imageList.children[profileIndex - 1];
		nextImage = imageList.children[profileIndex + 1];
	}

	currentImage.classList.remove("active", "slide-left", "slide-right");
	prevImage.classList.remove("active", "slide-left", "slide-right");
	nextImage.classList.remove("active", "slide-left", "slide-right");
	content.classList.remove("active");

	if (profileIndex === imageList.children.length - 1) {
		profileIndex = 0;
	} else {
		profileIndex += 1;
	}

	// check if at end or beg of array to add classes
	if (profileIndex == 0 || profileIndex == imageList.children.length - 1) {
		if (profileIndex == 0) {
			prevImage = imageList.children[imageList.children.length - 1];
			nextImage = imageList.children[profileIndex + 1];

		} else {
			prevImage = imageList.children[profileIndex - 1];
			nextImage = imageList.children[profileIndex];
		}

	} else {
		prevImage = imageList.children[profileIndex - 1];
		nextImage = imageList.children[profileIndex + 1];
	}


	currentImage = imageList.children[profileIndex];
	content = contentList.children[profileIndex];
	currentImage.classList.add("active");
	prevImage.classList.add("slide-left");
	content.classList.add("active");
});

prevButton.addEventListener("click", () => {
	let image = imageList.children[profileIndex];
	let content = contentList.children[profileIndex];

	image.classList.remove("active");
	content.classList.remove("active");

	if (profileIndex === 0) {
		profileIndex = imageList.children.length - 1;
	} else {
		profileIndex -= 1;
	}

	image = imageList.children[profileIndex];
	content = contentList.children[profileIndex];
	image.classList.add("active");
	content.classList.add("active");
});