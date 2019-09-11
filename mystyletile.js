const button = document.querySelector("button");
button.addEventListener("click", () => {
	modal.classList.remove("hide")
})
const modal = document.querySelector(".modal-background");

modal.addEventListener("click", () => {
	modal.classList.add("hide");

	button.addEventListener("click", () => {
		modal.classList.remove("hide")
	})

});
