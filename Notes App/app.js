const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Removing note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//create list command
yargs.command({
  command: "list",
  describe: "Listing all notes",
  handler: function () {
    notes.listNote();
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Reading inputes",
  builder: {
    title: {
      describe: "Read notes",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.read(argv.title);
  },
});

yargs.parse();
