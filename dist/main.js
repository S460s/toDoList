(()=>{"use strict";const t=function(){const t=document.getElementById("projectList"),e=function(t){t.forEach((t=>{t.displayProject()}))};return{projectFunctionalities:function(n,o){var d;e(n),function(n,o){o.deleteBtn.addEventListener("click",(()=>{!function(n,o){let d=n.indexOf(o);n.splice(d,1),function(){for(;0!==t.childNodes.length;)t.removeChild(t.lastChild)}(),e(n)}(n,o)}))}(n,o),(d=o).detailsBtn.addEventListener("click",(()=>{d.todoDiv.classList.toggle("invisible")}))}}}(),e=function(){const t=document.getElementById("closeProjectForm"),e=document.getElementById("addProjectButton"),n=document.getElementById("projectPopUp");return{startForm:function(){t.addEventListener("click",(function(){n.style.cssText="display: none"})),e.addEventListener("click",(function(){n.style.cssText="display: flex"}))}}}(),n=function(t,e,n,o,d){const i=document.createElement(`${t}`);return d&&(i.textContent=`${d}`),n&&i.setAttribute("id",`${n}`),o&&i.classList.add(`${o}`),{displayElement:function(){e.appendChild(i)},name:i}},o=function(t){const e=document.getElementById("todoPopUp"),o=document.getElementById("todoForm"),d=function(t){for(;1!==t.childNodes.length;)t.removeChild(t.lastChild)},i=function(t){t.forEach((t=>{t.displayTodo()}))},l=function(c){console.log("createTodoTest"),c.preventDefault();let s=function(t){const e=n("div",t,"todoCard"),o=document.getElementById("todoTitleInput"),d=(document.getElementById("todoDescriptionInput"),document.getElementById("todoPriority")),i=document.getElementById("todoDateInput"),l=n("p",e.name,"deleteTodo","","x"),c=n("p",e.name,"editTodo","","Edit"),s=l.name,r=(c.name,n("p",e.name,"todoTitle","",o.value)),a=n("p",e.name,"todoPriority","",d.value),m=n("p",e.name,"todoDueDate","",i.value);return{displayTodo:function(){e.displayElement(),r.displayElement(),a.displayElement(),m.displayElement(),c.displayElement(),l.displayElement()},deleteBtn:s}}(t.todoDiv);var r,a,m;t.todoList.push(s),d(t.todoDiv),i(t.todoList),o.reset(),r=t.todoList,a=s,m=t.todoDiv,a.deleteBtn.addEventListener("click",(()=>{!function(t,e,n){let o=t.indexOf(e);t.splice(o,1),d(n),i(t)}(r,a,m)})),e.style.cssText="display: none",o.removeEventListener("submit",l)};return{createTodo:function(){o.addEventListener("submit",l)},removeEventListener:function(){o.removeEventListener("submit",l)}}},d=function(){const t=document.getElementById("todoPopUp"),e=document.getElementById("closeTodoForm"),n=document.getElementById("todoForm");return{startForm:function(d){e.addEventListener("click",(function(){t.style.cssText="display: none",n.reset()})),function(n){n.addTodoBtn.addEventListener("click",(function(){t.style.cssText="display: flex",console.log(n.addTodoBtn);let d=o(n);d.createTodo(),e.addEventListener("click",d.removeEventListener)}))}(d)}}}();(function(){const o=document.getElementById("projectForm"),i=document.getElementById("titleInput");let l=[];localStorage.getItem("projectList")?JSON.parse(localStorage.getItem("projectList")).forEach((t=>{l.push(t)})):l=[];const c=function(e){e.preventDefault();let o=function(t){const e=document.getElementById("projectList"),o=n("div",e,"project"),d=n("p",o.name,"projectName","",t),i=n("p",o.name,"projectDetails","","i"),l=i.name,c=n("p",o.name,"projectDltBtn","","x"),s=c.name,r=n("div",e,"todoSection","invisible"),a=r.name,m=n("button",a,"newTodo","","Add new TODO");return{displayProject:function(){o.displayElement(),d.displayElement(),i.displayElement(),c.displayElement(),r.displayElement(),m.displayElement()},deleteBtn:s,detailsBtn:l,todoDiv:a,addTodoBtn:m.name,todoList:[]}}(i.value);l.push(o),l.forEach((t=>{JSON.stringify(t)})),localStorage.setItem("projectList",JSON.stringify(l)),i.value="",t.projectFunctionalities(l,o),console.table(l),d.startForm(o)};return{startApp:function(){console.log(l),e.startForm(),o.addEventListener("submit",c)}}})().startApp()})();
//# sourceMappingURL=main.js.map