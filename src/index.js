import { projectFlow } from "./projectLogic";

import { projectFormLogic } from "./projectForm";
import { projectFactory } from "./projectFactory";

import { todoFormLogic } from "./todoForm";

const appFlow = (function () {
	const projectForm = document.getElementById("projectForm");
	const titleInput = document.getElementById("titleInput");

	const setProjects = function () {
		let objects = JSON.parse(localStorage.getItem("projectList"));
		objects.forEach((project) => {
			projectList.push(project);
		});
	};

	const populateStorage = function () {
		projectList.forEach((i) => {
			JSON.stringify(i);
		});
		localStorage.setItem("projectList", JSON.stringify(projectList));
	};

	let projectList = [];
	if (!localStorage.getItem("projectList")) {
		projectList = [];
	} else {
		setProjects();
	}

	const handleCreateProject = function (e) {
		e.preventDefault();
		let newProject = projectFactory(titleInput.value);
		projectList.push(newProject);
		populateStorage();
		titleInput.value = "";
		projectFlow.projectFunctionalities(projectList, newProject);
		console.table(projectList);
		todoFormLogic.startForm(newProject);
	};

	const createProjects = function () {
		projectForm.addEventListener("submit", handleCreateProject);
	};

	const startApp = function () {
		console.log(projectList);
		projectFormLogic.startForm();
		createProjects();
	};

	return { startApp };
})();

appFlow.startApp();
