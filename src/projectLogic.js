const projectFlow = (function () {
	const projectsDiv = document.getElementById("projectList");

	const renderProjects = function (projectList) {
		projectList.forEach((project) => {
			project.displayProject();
		});
	};

	const clearProjectDiv = function () {
		while (projectsDiv.childNodes.length !== 0) {
			projectsDiv.removeChild(projectsDiv.lastChild);
		}
	};

	const handleDeleteProject = function (projectList, project) {
		let num = projectList.indexOf(project);
		projectList.splice(num, 1);
		clearProjectDiv();
		renderProjects(projectList);
	};

	const deleteProjectEvent = function (projectList, project) {
		project.deleteBtn.addEventListener("click", () => {
			handleDeleteProject(projectList, project);
		});
	};

	const showTodosEvent = function (project) {
		project.detailsBtn.addEventListener("click", () => {
			project.todoDiv.classList.toggle("invisible");
		});
	};

	return { deleteProjectEvent, showTodosEvent, renderProjects };
})();

export { projectFlow };
