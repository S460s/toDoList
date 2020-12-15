import { elementFactory } from "./elementFactory";
import { projectFormLogic } from "./projectForm";
import { projectFactory } from "./projects";

const projectFlow = (function () {
	const projectForm = document.getElementById("projectForm");
	const titleInput = document.getElementById("titleInput");
	const projectList = [];

	const renderProjects = function () {
		projectList.forEach((prct) => {
			prct.displayProject();
		});
	};

	const handleSubmission = function (e) {
		e.preventDefault();
		projectList.push(projectFactory(titleInput.value));
		titleInput.value = "";
		renderProjects();
	};

	const createProjects = function () {
		projectForm.addEventListener("submit", handleSubmission);
	};

	const startProject = function () {
		projectFormLogic.startForm();
		createProjects();
	};

	return { startProject };
})();

projectFlow.startProject();
