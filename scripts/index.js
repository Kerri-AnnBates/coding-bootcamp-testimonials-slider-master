const nextButton = document.querySelector(".btn__next");
const prevButton = document.querySelector(".btn__prev");
const imageList = document.querySelector(".profile__image-list");
const contentList = document.querySelector(".profile__content-list");

// Flag set to 0
let profileIndex = 0;

nextButton.addEventListener("click", () => {
	let image = imageList.children[profileIndex];
	let content = contentList.children[profileIndex];

	image.classList.remove("active");
	content.classList.remove("active");

	if (profileIndex === imageList.children.length - 1) {
		profileIndex = 0;
	} else {
		profileIndex += 1;
	}

	image = imageList.children[profileIndex];
	content = contentList.children[profileIndex];
	image.classList.add("active");
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