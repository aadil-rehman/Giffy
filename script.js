const body = document.querySelector("body");
const image = document.querySelector("img");

console.dir(image);

body.addEventListener("click", (e) => {
	const { x, y } = e;

	image.style.left = `${x - 50}px`;
	image.style.top = `${y - 50}px`;
});
