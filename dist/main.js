(()=>{"use strict";const t=function(){const t=document.getElementById("projectList"),e=function(t){t.forEach((t=>{t.displayProject()}))};return{projectFunctionalities:function(n,o){var d;e(n),function(n,o){o.deleteBtn.addEventListener("click",(()=>{!function(n,o){let d=n.indexOf(o);n.splice(d,1),function(){for(;0!==t.childNodes.length;)t.removeChild(t.lastChild)}(),e(n)}(n,o)}))}(n,o),(d=o).detailsBtn.addEventListener("click",(()=>{d.todoDiv.classList.toggle("invisible")}))}}}(),e=function(){const t=document.getElementById("closeProjectForm"),e=document.getElementById("addProjectButton"),n=document.getElementById("projectPopUp");return{startForm:function(){t.addEventListener("click",(function(){n.style.cssText="display: none"})),e.addEventListener("click",(function(){n.style.cssText="display: flex"}))}}}(),n=function(t,e,n,o,d){const i=document.createElement(`${t}`);return d&&(i.textContent=`${d}`),n&&i.setAttribute("id",`${n}`),o&&i.classList.add(`${o}`),{displayElement:function(){e.appendChild(i)},name:i}},o=function(){const t=document.getElementById("todoPopUp"),e=document.getElementById("closeTodoForm");return{startForm:function(n){e.addEventListener("click",(function(){t.style.cssText="display: none"})),function(e){e.addEventListener("click",(function(){t.style.cssText="display: flex"}))}(n)}}}();(function(){const d=document.getElementById("projectForm"),i=document.getElementById("titleInput"),c=document.getElementById("todoForm"),s=document.getElementById("todoPopUp"),l=[],a=function(e){e.preventDefault();let d=function(t){const e=document.getElementById("projectList"),o=n("div",e,"project"),d=n("p",o.name,"projectName","",t),i=n("p",o.name,"projectDetails","","i"),c=i.name,s=n("p",o.name,"projectDltBtn","","x"),l=s.name,a=n("div",e,"todoSection","invisible"),r=a.name,u=n("button",r,"newTodo","","Add new TODO");return{displayProject:function(){o.displayElement(),d.displayElement(),i.displayElement(),s.displayElement(),a.displayElement(),u.displayElement()},deleteBtn:l,detailsBtn:c,todoDiv:r,addTodoBtn:u.name,todoList:[]}}(i.value);l.push(d),i.value="",t.projectFunctionalities(l,d),console.table(l),o.startForm(d.addTodoBtn)};return{startApp:function(){e.startForm(),d.addEventListener("submit",a),c.addEventListener("submit",(t=>{t.preventDefault(),c.reset(),s.style.cssText="display: none",console.log("12")}))}}})().startApp()})();
//# sourceMappingURL=main.js.map