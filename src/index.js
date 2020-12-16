import { projectFlow } from "./projectLogic";
import { projectFormLogic } from "./projectForm";
import { projectFactory } from "./projectFactory";

const appFlow = (function () {
	const projectForm = document.getElementById("projectForm");
	const titleInput = document.getElementById("titleInput");
	const projectList = [];

	const handleSubmission = function (e) {
		e.preventDefault();
		let newProject = projectFactory(titleInput.value);
		projectList.push(newProject);
		titleInput.value = "";
		projectFlow.renderProjects(projectList);
		projectFlow.deleteProjectEvent(projectList, newProject);
		projectFlow.showTodosEvent(newProject);
		console.table(projectList);
	};

	const createProjects = function () {
		projectForm.addEventListener("submit", handleSubmission);
	};

	const startApp = function () {
		projectFormLogic.startForm();
		createProjects();
	};

	return { startApp };
})();

appFlow.startApp();
