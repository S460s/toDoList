(()=>{"use strict";const t=function(){const t=document.getElementById("projectList"),e=function(t){t.forEach((t=>{t.displayProject()}))};return{projectFunctionalities:function(n,o){var d;e(n),function(n,o){o.deleteBtn.addEventListener("click",(()=>{!function(n,o){let d=n.indexOf(o);n.splice(d,1),function(){for(;0!==t.childNodes.length;)t.removeChild(t.lastChild)}(),e(n)}(n,o)}))}(n,o),(d=o).detailsBtn.addEventListener("click",(()=>{d.todoDiv.classList.toggle("invisible")}))}}}(),e=function(){const t=document.getElementById("closeProjectForm"),e=document.getElementById("addProjectButton"),n=document.getElementById("projectPopUp");return{startForm:function(){t.addEventListener("click",(function(){n.style.cssText="display: none"})),e.addEventListener("click",(function(){n.style.cssText="display: flex"}))}}}(),n=function(t,e,n,o,d){const i=document.createElement(`${t}`);return d&&(i.textContent=`${d}`),n&&i.setAttribute("id",`${n}`),o&&i.classList.add(`${o}`),{displayElement:function(){e.appendChild(i)},name:i}},o=function(){const t=document.getElementById("todoPopUp"),e=document.getElementById("todoForm"),o=function(t){for(;1!==t.childNodes.length;)t.removeChild(t.lastChild)},d=function(t){t.forEach((t=>{t.displayTodo()}))};return{createTodo:function(i){const l=function(c){console.log("createTodoTest"),c.preventDefault();let s=function(t){const e=n("div",t,"todoCard"),o=document.getElementById("todoTitleInput"),d=(document.getElementById("todoDescriptionInput"),document.getElementById("todoPriority")),i=document.getElementById("todoDateInput"),l=n("p",e.name,"deleteTodo","","x"),c=l.name,s=n("p",e.name,"todoTitle","",o.value),a=n("p",e.name,"todoPriority","",d.value),r=n("p",e.name,"todoDueDate","",i.value);return{displayTodo:function(){e.displayElement(),s.displayElement(),a.displayElement(),r.displayElement(),l.displayElement()},deleteBtn:c}}(i.todoDiv);var a,r,u;i.todoList.push(s),o(i.todoDiv),d(i.todoList),e.reset(),a=i.todoList,r=s,u=i.todoDiv,r.deleteBtn.addEventListener("click",(()=>{!function(t,e,n){let i=t.indexOf(e);t.splice(i,1),o(n),d(t)}(a,r,u)})),t.style.cssText="display: none",e.removeEventListener("submit",l)};e.addEventListener("submit",l)}}}(),d=function(){const t=document.getElementById("todoPopUp"),e=document.getElementById("closeTodoForm");return{startForm:function(n){e.addEventListener("click",(function(){t.style.cssText="display: none"})),function(e){e.addTodoBtn.addEventListener("click",(function(){t.style.cssText="display: flex",console.log(e.addTodoBtn),o.createTodo(e)}))}(n)}}}();(function(){const o=document.getElementById("projectForm"),i=document.getElementById("titleInput"),l=[],c=function(e){e.preventDefault();let o=function(t){const e=document.getElementById("projectList"),o=n("div",e,"project"),d=n("p",o.name,"projectName","",t),i=n("p",o.name,"projectDetails","","i"),l=i.name,c=n("p",o.name,"projectDltBtn","","x"),s=c.name,a=n("div",e,"todoSection","invisible"),r=a.name,u=n("button",r,"newTodo","","Add new TODO");return{displayProject:function(){o.displayElement(),d.displayElement(),i.displayElement(),c.displayElement(),a.displayElement(),u.displayElement()},deleteBtn:s,detailsBtn:l,todoDiv:r,addTodoBtn:u.name,todoList:[]}}(i.value);l.push(o),i.value="",t.projectFunctionalities(l,o),console.table(l),d.startForm(o)};return{startApp:function(){e.startForm(),o.addEventListener("submit",c)}}})().startApp()})();
//# sourceMappingURL=main.js.map