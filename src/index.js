import { elementFactory } from "./elementFactory";
import { projectForm } from "./projectForm";
import { projectFactory } from "./projects";

projectForm.startForm();
const task1 = projectFactory("");
task1.renderOnClick();
