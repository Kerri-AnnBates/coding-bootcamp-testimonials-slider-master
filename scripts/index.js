const nextButton = document.querySelector(".btn__next");
const prevButton = document.querySelector(".btn__prev");
const imageList = document.querySelector(".profile__image-list");
const contentList = document.querySelector(".profile__content-list");

// Flag set to 0
let profileIndex = 0;
let currentImage, prevImage, nextImage;
let content;


const showNext = () => {
	content = contentList.children[profileIndex];
	currentImage = imageList.children[profileIndex];

	currentImage.classList.remove("active");
	content.classList.remove("active");

	if (profileIndex === imageList.children.length - 1) {
		profileIndex = 0;
	} else {
		profileIndex += 1;
	}

	currentImage = imageList.children[profileIndex];
	content = contentList.children[profileIndex];
	currentImage.classList.add("active");
	content.classList.add("active");
}

const showPrev = () => {
	content = contentList.children[profileIndex];
	currentImage = imageList.children[profileIndex];

	currentImage.classList.remove("active");
	content.classList.remove("active");

	if (profileIndex === 0) {
		profileIndex = imageList.children.length - 1;
	} else {
		profileIndex -= 1;
	}

	currentImage = imageList.children[profileIndex];
	content = contentList.children[profileIndex];
	currentImage.classList.add("active");
	content.classList.add("active");
}

nextButton.addEventListener("click", showNext);
prevButton.addEventListener("click", showPrev);