class ToDoList {
  constructor() {
    this.notes = [];
  }

  addNotes(notes) {
    if (notes === null) {
      return "Error: Note is empty";
    } else {
      this.notes.push({ status: "Not done", notes });
    }
  }

  setStatus(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index].status = "Done";
    }
  }

  deleteNote(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1);
    }
  }

  editNote(index, newText) {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index].notes = newText;
    }
  }

  getNoteInfo(index) {
    if (index >= 0 && index < this.notes.length) {
      return this.notes[index];
    } else {
      return "Error: Invalid index";
    }
  }

  getTotalNotes() {
    return this.notes.length;
  }

  getRemainingNotes() {
    return this.notes.filter((note) => note.status === "Not done").length;
  }

  getAllNotes() {
    return this.notes;
  }
}

const list = new ToDoList();
list.addNotes("Study Spanish");
list.addNotes("Go to the gym");
list.addNotes("Change my work");

console.log("Notes list:", list.getAllNotes());

list.setStatus(2);
list.deleteNote(1);
list.editNote(0, "End running and start swimming");

console.log("Full note information 0:", list.getNoteInfo(0));
console.log("All notes:", list.getTotalNotes());
console.log("Not done notes:", list.getRemainingNotes());
