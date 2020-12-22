const todoFormLogic = (function () {
	const form = document.getElementById("todoPopUp");
	const closeBtn = document.getElementById("closeTodoForm");

	const closeProjectForm = function () {
		closeBtn.addEventListener("click", function () {
			form.style.cssText = "display: none";
		});
	};

	const openProjectForm = function (project) {
		project.addTodoBtn.addEventListener("click", function () {
			form.style.cssText = "display: flex";
		});
	};

	const startForm = function (project) {
		closeProjectForm();
		openProjectForm(project);
	};

	return { startForm };
})();

export { todoFormLogic };
