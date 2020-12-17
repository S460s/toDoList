import { elementFactory } from "./elementFactory.js";

const projectFactory = function (titleText) {
	const projects = document.getElementById("projectList");

	const projectCard = elementFactory("div", projects, "project");
	const title = elementFactory("p", projectCard.name, "projectName", "", titleText);

	const details = elementFactory("p", projectCard.name, "projectDetails", "", "i");
	const detailsBtn = details.name;

	const delelete = elementFactory("p", projectCard.name, "projectDltBtn", "", "x");
	const deleteBtn = delelete.name;

	const todoSection = elementFactory("div", projects, "todoSection", "invisible");
	const todoDiv = todoSection.name;

	const addTodo = elementFactory("button", todoDiv, "newTodo", "", "Add new TODO");
	const addTodoBtn = addTodo.name;

	const todoList = [];

	const displayProject = function () {
		projectCard.displayElement();
		title.displayElement();
		details.displayElement();
		delelete.displayElement();
		todoSection.displayElement();
		addTodo.displayElement();
	};

	return { displayProject, deleteBtn, detailsBtn, todoDiv, addTodoBtn, todoList };
};

export { projectFactory };
