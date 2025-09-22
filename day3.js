/*Create a new file day3.js

Doing the following:

Create a new text file notes.txt and write some content

Read the content of notes.txt and print it

Append some more content to notes.txt

Delete the file at the end*/

const fs = require("fs");
const data = fs.readFileSync("note.txt","utf-8");
console.log("reading data",data);

fs.appendFileSync("note.txt","/n appending data");
console.log("file appended succefully");

fs.unlinkSync("note.txt");
console.log("Deleted succefully");