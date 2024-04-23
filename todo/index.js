const btnTodoInsert = document.querySelector("#btn-todo-insert");
const btnTodoSelect = document.querySelector("#btn-todo-select");
const inputTag = document.querySelector("input[name=todo]");

// 로컬스토리지 초기셋팅
localStorage.setItem("todo", JSON.stringify([]));

// TODO insert
btnTodoInsert.addEventListener("click", function(){
  const todoListStr = localStorage.getItem("todo");
  const todoList = JSON.parse(todoListStr);
  todoList.push(inputTag.value);
  localStorage.setItem("todo", JSON.stringify(todoList));
});

// TODO select
btnTodoSelect.addEventListener("click", function(){

});
