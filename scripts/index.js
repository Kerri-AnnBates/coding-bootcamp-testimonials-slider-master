const nextButton = document.querySelector(".btn__next");
const prevButton = document.querySelector(".btn__prev");
const imageList = document.querySelector(".profile__image-list");
const contentList = document.querySelector(".profile__content-list");


console.log(imageList.children);
// Flag set to 0
let imgIndex = 0;

nextButton.addEventListener("click", () => {
	let image = imageList.children[imgIndex];
	image.classList.remove("active");

	if (imgIndex === imageList.children.length - 1) {
		imgIndex = 0;
	} else {
		imgIndex += 1;
	}

	image = imageList.children[imgIndex];
	image.classList.add("active");
});

prevButton.addEventListener("click", () => {
	let image = imageList.children[imgIndex];
	image.classList.remove("active");

	if (imgIndex === 0) {
		imgIndex = imageList.children.length - 1;
	} else {
		imgIndex -= 1;
	}

	image = imageList.children[imgIndex];
	image.classList.add("active");
});

// On next click, get the image at image[flag]. 
// Remove show class from current image.
// Check if te flag is === to the length-1
	// if it is set flage to 0
	// Add show class to image[flag]
// else
	// Increase flag by 1.
	// Add show class to image[flag]