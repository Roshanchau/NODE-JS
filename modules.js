//destructuring
const { people, ages } = require("./people");

// when we require a file the node looks out for the file or imports the file and runs it.

// console.log(xyz); ---> the xyz returns an empty object.
console.log(people, ages);

// console.log(people); --> throws an error.

const os = require("os");
console.log(os.platform(), os.homedir());
