const body = document.querySelector("body");
const image = document.querySelector("img");

let prevClickX = 0;
let isImageFlipped = false;

body.addEventListener("click", (e) => {
	const { x, y } = e;

	let imageX = image.x;
	let imageY = image.y;

	if (x > prevClickX) {
		if (!isImageFlipped) {
			image.style.transform = "scaleX(-1)";
			isImageFlipped = true;
		}
	} else {
		if (isImageFlipped) {
			image.style.transform = "scaleX(1)";
			isImageFlipped = false;
		}
	}

	prevClickX = x;

	image.style.left = `${x - 50}px`;
	image.style.top = `${y - 50}px`;
});
