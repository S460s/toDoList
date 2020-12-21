import { projectFlow } from "./projectLogic";

import { projectFormLogic } from "./projectForm";
import { projectFactory } from "./projectFactory";

import { todoFormLogic } from "./todoForm";

const appFlow = (function () {
	const projectForm = document.getElementById("projectForm");
	const titleInput = document.getElementById("titleInput");
	const projectList = [];

	const handleCreateProject = function (e) {
		e.preventDefault();
		let newProject = projectFactory(titleInput.value);
		projectList.push(newProject);
		titleInput.value = "";
		projectFlow.projectFunctionalities(projectList, newProject);
		console.table(projectList);
		todoFormLogic.startForm(newProject);
	};

	const createProjects = function () {
		projectForm.addEventListener("submit", handleCreateProject);
	};

	const startApp = function () {
		projectFormLogic.startForm();
		createProjects();
	};

	return { startApp };
})();

appFlow.startApp();
