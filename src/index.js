import { projectFlow } from "./projectLogic";

import { projectFormLogic } from "./projectForm";
import { projectFactory } from "./projectFactory";

import { todoFormLogic } from "./todoForm";
import { todoFactory } from "./todoFactory";

const appFlow = (function () {
	const projectForm = document.getElementById("projectForm");
	const titleInput = document.getElementById("titleInput");
	const todoForm = document.getElementById("todoForm");
	const todoPopUp = document.getElementById("todoPopUp");
	const projectList = [];

	const createTodo = function () {
		todoForm.addEventListener("submit", (e) => {
			e.preventDefault();
			todoForm.reset();
			todoPopUp.style.cssText = "display: none";
			console.log("12");
		});
	};

	const handleCreateProject = function (e) {
		e.preventDefault();
		let newProject = projectFactory(titleInput.value);
		projectList.push(newProject);
		titleInput.value = "";
		projectFlow.projectFunctionalities(projectList, newProject);
		console.table(projectList);
		todoFormLogic.startForm(newProject.addTodoBtn);
	};

	const createProjects = function () {
		projectForm.addEventListener("submit", handleCreateProject);
	};

	const startApp = function () {
		projectFormLogic.startForm();
		createProjects();
		createTodo();
	};

	return { startApp };
})();

appFlow.startApp();
