const projectFormLogic = (function () {
	const closeBtn = document.getElementById("close");
	const newProjectBtn = document.getElementById("addProjectButton");
	const form = document.getElementById("projectPopUp");

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

export { projectFormLogic };
