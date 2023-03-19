let todoList = [];

function addItem() {
  let inputElement = document.getElementById("todo-input");
  let inputValue = inputElement.value.trim();
  
  if (inputValue !== "") {
    todoList.push(inputValue);
    inputElement.value = "";
    renderList();
  }
}

function removeItem(index) {
  todoList.splice(index, 1);
  renderList();
}

function renderList() {
  let listElement = document.getElementById("todo-list");
  listElement.innerHTML = "";
  
  if (todoList.length === 0) {
    listElement.innerHTML = "<li>No to-do items yet.</li>";
  } else {
    for (let i = 0; i < todoList.length; i++) {
      let itemElement = document.createElement("li");
      itemElement.innerText = todoList[i];
      
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "X";
      deleteButton.onclick = function() {
        removeItem(i);
      };
      
      itemElement.appendChild(deleteButton);
      listElement.appendChild(itemElement);
    }
  }
}
