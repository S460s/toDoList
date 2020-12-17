import { elementFactory } from "./elementFactory.js";

const todoFactory = function (container) {
	const todoCard = elementFactory("div", container, "todoCard");
	const titleInput = document.getElementById("todoTitleForm");
	const descriptionInput = document.getElementById("todoDescriptionInput");
	const priorityInput = document.getElementById("todoPriority");
	const dateInput = document.getElementById("todoDateInput");

	const title = elementFactory("p", todoCard.name, "todoTitle", "", titleInput.value);
	const priority = elementFactory(
		"p",
		todoCard.name,
		"todoPriority",
		"",
		priorityInput.value
	);
	const date = elementFactory("p", todoCard.name, "todoDueDate", "", dateInput.value);

	const displayTodo = function () {
		todoCard.displayElement();
		title.displayElement();
		priority.displayElement();
		date.displayElement();
	};

	return { displayTodo };
};

export { todoFactory };
