let searchItem = document.querySelector("#item");
let todobox = document.querySelector("#to-do-box");

searchItem.addEventListener('keyup', function(e) {
  if(e.key == "Enter") {
    addTodo(this.value);
    this.value = "";
  }
})

function addTodo(searchItem) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<span class="list-value">${searchItem}</span>
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener('click', function() {
      this.classList.toggle("done");
    });

    listItem.querySelector("i").addEventListener('click', function(){
      listItem.remove();
    })

    todobox.appendChild(listItem);

}

