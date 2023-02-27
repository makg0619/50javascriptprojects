const main = document.querySelector("#main");
const addBtn = document.querySelector("#addBtn");

const saveNote = () => {
  const notes = document.querySelectorAll(".note textarea");
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  })
  if(data.length == 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem('notes', JSON.stringify(data));
  }
}

function addNote(text = "") {
  let note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
  <div class="tool">
      <i class="fas fa-save"></i>
      <i class="fas fa-trash"></i>
  </div>
  <textarea>${text}</textarea>
  `;

  note.querySelector('.fa-trash').addEventListener('click', function() {
    note.remove();
    saveNote();
  });

  note.querySelector('.fa-save').addEventListener('click', function() { 
    saveNote()
  })

  main.appendChild(note);
  saveNote();
}

addBtn.addEventListener('click', function() {
  addNote();
});

(
  function() {
    const Isnotes = JSON.parse(localStorage.getItem("notes"));
    if(Isnotes == null) {
      addNote()
    } else {
      Isnotes.forEach((Isnote) => {
        addNote(Isnote);
      })
    }
  }
)()