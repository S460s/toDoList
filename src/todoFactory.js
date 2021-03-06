import { elementFactory } from "./elementFactory.js";

const todoFactory = function (container) {
	const todoCard = elementFactory("div", container, "todoCard");
	const titleInput = document.getElementById("todoTitleInput");
	const descriptionInput = document.getElementById("todoDescriptionInput");
	const priorityInput = document.getElementById("todoPriority");
	const dateInput = document.getElementById("todoDateInput");
	const deleteTodo = elementFactory("p", todoCard.name, "deleteTodo", "", "x");
	const edit = elementFactory("p", todoCard.name, "editTodo", "", "Edit");

	const deleteBtn = deleteTodo.name;
	const editBtn = edit.name;

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
		edit.displayElement();
		deleteTodo.displayElement();
	};

	return { displayTodo, deleteBtn };
};

export { todoFactory };
