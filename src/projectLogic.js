import { elementFactory } from "./elementFactory";
import { projectFormLogic } from "./projectForm";
import { projectFactory } from "./projectFactory";

const projectFlow = (function () {
	const projectDiv = document.getElementById("projectList");
	const projectForm = document.getElementById("projectForm");
	const titleInput = document.getElementById("titleInput");
	const projectList = [];

	const renderProjects = function () {
		projectList.forEach((project) => {
			project.displayProject();
		});
	};

	const deleteProject = function (prjct) {
		console.log(prjct.button);
		prjct.button.addEventListener("click", () => {
			console.log("hello");
			let num = projectList.indexOf(prjct);
			console.log(num);
			projectList.splice(num, 1);
			projectDiv.innerHTML = "";
			renderProjects();
			console.log(projectList);
		});
	};

	const handleSubmission = function (e) {
		e.preventDefault();
		let newProject = projectFactory(titleInput.value);
		projectList.push(newProject);
		titleInput.value = "";
		renderProjects();
		deleteProject(newProject);
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
