import { elementFactory } from "./elementFactory.js";

const projectFactory = function () {
	const projectForm = document.getElementById("projectForm");
	const projects = document.getElementById("projectList");
	const projectInput = document.getElementById("projectInput");

	const projectCard = elementFactory("div", projects, "project");
	const title = elementFactory(
		"p",
		projectCard.name,
		"projectName",
		"",
		projectInput.value
	);

	const displayProject = function (e) {
		e.preventDefault();
		console.log("test");
		projectCard.displayElement();
		title.displayElement();
	};

	const renderOnClick = function () {
		projectForm.addEventListener("submit", displayProject);
	};

	return { renderOnClick };
};

export { projectFactory };
