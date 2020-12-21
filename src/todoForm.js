import { elementFactory } from "./elementFactory";

const todoFormLogic = (function () {
	const form = document.getElementById("todoPopUp");
	const closeBtn = document.getElementById("closeTodoForm");

	const closeProjectForm = function () {
		closeBtn.addEventListener("click", function () {
			form.style.cssText = "display: none";
		});
	};

	const openProjectForm = function (btn) {
		btn.addEventListener("click", function () {
			form.style.cssText = "display: flex";
		});
	};

	const startForm = function (btn) {
		closeProjectForm();
		openProjectForm(btn);
	};

	return { startForm };
})();

export { todoFormLogic };
