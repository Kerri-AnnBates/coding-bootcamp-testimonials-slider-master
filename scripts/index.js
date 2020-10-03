const nextButton = document.querySelector(".btn__next");
const prevButton = document.querySelector(".btn__prev");
const imageList = document.querySelector(".profile__image-list").children;
const contentList = document.querySelector(".profile__content-list").children;

// Flag set to 0
let profileIndex = 0;
let currentImage, prevImage, nextImage;
let content;

const resetStyles = () => {
	[...imageList].forEach(img => {
		img.classList.remove("active");
	});
	content.classList.remove("active");
}

const showNext = () => {
	content = contentList[profileIndex];
	currentImage = imageList[profileIndex];

	resetStyles();

	if (profileIndex === imageList.length - 1) {
		profileIndex = 0;
	} else {
		profileIndex += 1;
	}

	currentImage = imageList[profileIndex];
	content = contentList[profileIndex];

	currentImage.classList.add("active");
	content.classList.add("active");
}

const showPrev = () => {
	content = contentList[profileIndex];
	currentImage = imageList[profileIndex];

	resetStyles();

	if (profileIndex === 0) {
		profileIndex = imageList.length - 1;
	} else {
		profileIndex -= 1;
	}

	currentImage = imageList[profileIndex];
	content = contentList[profileIndex];

	currentImage.classList.add("active");
	content.classList.add("active");
}

nextButton.addEventListener("click", showNext);
prevButton.addEventListener("click", showPrev);