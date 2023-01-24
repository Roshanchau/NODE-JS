const fs = require("fs");

//reading files

//this is asynchronous as while node is busy reading the file the last line string is logged into the console and then only the call back function runs.
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//this logs in to the console first.
// console.log("last line");

//writing files

// fs.writeFile("./docs/blog1.txt", "hello, world", () => {
//   console.log("file was written");
// });

// fs.writeFile("./docs/blog2.txt", "hello, again", () => {
//   console.log("file was written");
// });

//directories

if (!fs.existsSync("./assets")) {
  //asyncronous jobs always take a callback function
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

//deleting files

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
