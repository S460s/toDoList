import { elementFactory } from "./elementFactory.js";

const projectFactory = function (titleText) {
	const projects = document.getElementById("projectList");

	const projectCard = elementFactory("div", projects, "project");
	const title = elementFactory("p", projectCard.name, "projectName", "", titleText);
	const details = elementFactory("p", projectCard.name, "projectDetails", "", "i");
	const delBtn = elementFactory("p", projectCard.name, "projectDltBtn", "", "x");
	const button = delBtn.name;

	const displayProject = function () {
		projectCard.displayElement();
		title.displayElement();
		details.displayElement();
		delBtn.displayElement();
	};

	return { displayProject, button };
};

export { projectFactory };
