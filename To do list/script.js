const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let edtli = null;

function whenClicked() {
  const inputText = inputBox.value;
  if (inputText.length === 0) {                    /* checking if the input is empty or not */
    alert("You must enter something");
  } else if (addBtn.value === "Edit") {
    edtli.querySelector("p").innerText = inputText;
    addBtn.value = "Add+";
    inputBox.value = "";
  } else {
    const li = document.createElement("li");        /*creating elements with dom */
    const p = document.createElement("p");          /*creating elements with dom */
    const delBtn =document.createElement("button"); /*creating elements with dom */
    const edtBtn =document.createElement("button"); /*creating elements with dom */

    delBtn.classList.add("delBtn");
    edtBtn.classList.add("edtBtn");

    delBtn.innerText = "Remove";
    edtBtn.innerText = "Edit";

    li.appendChild(p);
    li.appendChild(delBtn);
    li.appendChild(edtBtn);
    todoList.appendChild(li); /*add new li in ul */

    p.innerHTML = inputText;
    inputBox.value = "";
  }
}

function edtDel(e) {
  const inputText = inputBox.value;

  if (e.target.innerHTML === "Remove") {
    todoList.removeChild(e.target.parentElement);
  } else if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.parentElement.firstElementChild.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    edtli = e.target.parentElement;
  }
}

addBtn.addEventListener("click", whenClicked);
todoList.addEventListener("click", edtDel);
