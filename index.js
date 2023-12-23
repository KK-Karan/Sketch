let grid = document.createElement("div");
grid.className = "grid";
let enter = document.getElementById('enter')




grid.onmouseover = function(event) {
  let target = event.target;
  target.style.background = "black";
};

grid.onmouseout = function(event) {
  let target = event.target;
  target.style.background = "black";
};

document.body.appendChild(grid);
const reset = document.getElementById('reset')

function changeBackground() {
  let columns = Array.from(document.querySelectorAll('.column'))
  let rows = Array.from(document.querySelectorAll('.row'))
  
  for (let i = 0; i < columns.length; i++) {
    columns[i].style.background = "";
  }
  
  for (let j = 0; j < rows.length; j++) {
    rows[j].style.background = "";
  }
}



reset.addEventListener('click' , changeBackground)


let modal = document.querySelector(".modal");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
  
}


let input = document.getElementById("input");

function getInputValue(){
  grid.innerHTML = '';
  newValue = input.value
  for (let i = 0; i < newValue; i++) {
    let column = document.createElement("div");
    column.className = "column";

  
    for (let j = 0; j < newValue; j++) {
      let row = document.createElement("div");
      row.className = "row";
      row.style.width = 640 / input.value + "px";
      row.style.height = 640 / input.value + "px";
      column.appendChild(row);
    }
    grid.appendChild(column);
  }
  
}

function resetInputValue(){
  input.value = null;
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
enter.addEventListener('click' , toggleModal);
enter.addEventListener('click' , getInputValue);
enter.addEventListener('click' , resetInputValue);


































