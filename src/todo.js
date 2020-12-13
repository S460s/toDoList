import { elementFactory } from "./elementFactory";
const todos = document.getElementById("todos");

const todoFactory = function (title, dueDate, priority, description) {
	const todo = elementFactory("div", todos, "todo");
	const todoTitle = elementFactory("p", todo.name, "todoTitle");

	return { displayElement, name };
};
