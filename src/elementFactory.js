const elementFactory = function (elmnt, container, id, cls, txt) {
	const name = document.createElement(`${elmnt}`);
	if (txt) {
		name.textContent = `${txt}`;
	}
	if (id) {
		name.setAttribute("id", `${id}`);
	}
	if (cls) {
		name.classList.add(`${cls}`);
	}
	const displayElement = function () {
		container.appendChild(name);
	};
	return { displayElement, name };
};

export { elementFactory };
