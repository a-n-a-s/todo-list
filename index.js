const container = document.getElementById("cards");
const newCard = (taskData) => `
<div class="card w-100 my-3">
<div class="card-body border border-dark rounded">
  <h5 class="card-title">${taskData.taskTitle}</h5>
  <p class="card-text">${taskData.taskDesc}</p>
  <a href="#" class="btn btn-danger">Delete Task</a>
</div>
</div>
`;
const globalStorage = [];
const addTask = () => {
  taskData = {
    id: Date.now(),
    taskTitle: document.getElementById("exampleFormControlInput1").value,
    taskDesc: document.getElementById("exampleFormControlTextarea1").value,
  };
  
  container.insertAdjacentHTML("beforeend", newCard(taskData));

  globalStorage.push(taskData);

  localStorage.setItem("todo",JSON.stringify(taskData));
  
};

const deleteTask = () => {
  
};
