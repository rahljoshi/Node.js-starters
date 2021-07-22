const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");

const getNotes = function () {
  return "Your notes";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title);
  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note added successfully!"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const deletedNote = notes.filter((note) => {
    return note.title !== title;
  });
  if (deletedNote.length < notes.length) {
    saveNotes(deletedNote);
    console.log(chalk.green.inverse("Note deleted successfully !!!!!"));
  } else {
    console.log(chalk.red.inverse("Enter valid title"));
  }
};

const listNote = () => {
  const notes = loadNotes();

  console.log(chalk.green.inverse("Your Notes"));
  notes.forEach((element) => {
    console.log(element.title);
  });
};

const read = (title) => {
  const notes = loadNotes();
  const note = notes.find((element) => element.title === title);

  if (note) {
    console.log(chalk.green.inverse(title) + "\n" + note.body);
  } else {
    console.log(chalk.red.inverse("Enter a valid Title"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  read: read,
};
