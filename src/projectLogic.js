import { projectFormLogic } from "./projectForm";
import { projectFactory } from "./projectFactory";

const projectFlow = (function () {
	const projectsDiv = document.getElementById("projectList");
	const projectForm = document.getElementById("projectForm");
	const titleInput = document.getElementById("titleInput");
	const projectList = [];

	const renderProjects = function () {
		projectList.forEach((project) => {
			project.displayProject();
		});
	};

	const clearProjectDiv = function () {
		while (projectsDiv.childNodes.length !== 0) {
			projectsDiv.removeChild(projectsDiv.lastChild);
		}
	};

	const handleDeleteProject = function (project) {
		let num = projectList.indexOf(project);
		projectList.splice(num, 1);
		clearProjectDiv();
		renderProjects();
	};

	const deleteProjectEvent = function (project) {
		project.deleteBtn.addEventListener("click", () => {
			handleDeleteProject(project);
		});
	};

	const showTodosEvent = function (project) {
		project.detailsBtn.addEventListener("click", () => {
			project.todoDiv.classList.toggle("invisible");
		});
	};

	const handleSubmission = function (e) {
		e.preventDefault();
		let newProject = projectFactory(titleInput.value);
		projectList.push(newProject);
		titleInput.value = "";
		renderProjects();
		deleteProjectEvent(newProject);
		showTodosEvent(newProject);
		console.table(projectList);
	};

	const createProjects = function () {
		projectForm.addEventListener("submit", handleSubmission);
	};

	const startFlow = function () {
		projectFormLogic.startForm();
		createProjects();
	};

	return { startFlow };
})();

export { projectFlow };
