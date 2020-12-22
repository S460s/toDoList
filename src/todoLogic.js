const todoLogic = (function () {
	const todoPopUp = document.getElementById("todoPopUp");
	const todoForm = document.getElementById("todoForm");

	const handleCreateTodo = function (e) {
		console.log(2);
		e.preventDefault();
		//	let newTodo = todoFactory();
		todoForm.reset();
		todoPopUp.style.cssText = "display: none";
	};

	const createTodo = function () {
		todoForm.addEventListener("submit", handleCreateTodo);
	};

	return { createTodo };
})();

export { todoLogic };
