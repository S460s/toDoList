import { elementFactory } from "./elementFactory.js";

const projectFactory = function (projectName) {
	const projects = document.getElementById("projectList");
	const projectInput = document.getElementById("projectInput");
	const projectCard = elementFactory("div", projects, "project");
	const title = elementFactory("p", projectCard.name, "projectName", "", projectName);

	const displayProject = function () {};
};

const projectForm = (function () {
	const closeBtn = document.getElementById("close");
	const newProjectBtn = document.getElementById("addProjectButton");
	const form = document.getElementById("projectForm");

	const closeProjectForm = function () {
		closeBtn.addEventListener("click", function () {
			form.style.cssText = "display: none";
		});
	};

	const openProjectForm = function () {
		newProjectBtn.addEventListener("click", function () {
			form.style.cssText = "display: flex";
		});
	};

	const startForm = function () {
		closeProjectForm();
		openProjectForm();
	};

	return { startForm };
})();

export { projectForm };
