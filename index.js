const container = document.getElementById("cards");
const newCard = (taskData) => `
<div class="card w-100 my-3">
<div class="card-body border border-dark rounded">
  <h5 class="card-title">${taskData.taskTitle}</h5>
  <p class="card-text">${taskData.taskDesc}</p>
  <a href="#" class="btn btn-danger" onclick="deleteTask()">Delete Task</a>
</div>
</div>
`;
let globalStorage = [];
const loadData = () => {
  const getCarddata = localStorage.getItem("todo");
  const {cards} = JSON.parse(getCarddata);
  console.log(cards);

  cards.map((cardObject) => {
    container.insertAdjacentHTML("beforeend" , newCard(cardObject));
    globalStorage.push(cardObject);
  });
}
const addTask = () => {
  taskData = {
    id: Date.now(),
    taskTitle: document.getElementById("exampleFormControlInput1").value,
    taskDesc: document.getElementById("exampleFormControlTextarea1").value,
  };
  
  container.insertAdjacentHTML("beforeend", newCard(taskData));

  globalStorage.push(taskData);

  localStorage.setItem("todo",JSON.stringify({cards : globalStorage}));
  
};

const deleteTask = () => {
  event = window.event;
  const targetId = event.target.id;
  const tagName = event.target.tagName;
  
  globalStorage = globalStorage.filter( (cardObject) => cardObject.id != targetId
  );
  
  localStorage.setItem("todo",JSON.stringify(
  newCard({cards : globalStorage})));
  
  
  if(tagName == "A"){
    return container.removeChild(event.target.parentNode.parentNode);
  }
  
};
