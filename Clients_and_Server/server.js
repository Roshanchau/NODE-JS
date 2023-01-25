const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content type
  res.setHeader("Content-Type", "text/html");

  //send html manulally

  // res.write('<head><link rel="stylesheet" href="#"></head>');
  // res.write("<p>hello , ninjas</p>");
  // res.write("<p>hello again, ninjas</p>");
  // res.end();

  //routes
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      //settin the statusCode
      res.statusCode = 200; // means ok the status of the response sent to the browser is okay.
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    //redirects

    //redirecting from about-me to about.
    case "/about-me":
      //status code shows that the content in the file has been shifted
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;

    default:
      path += "404.html";
      //response sent to the browser doesnot exist
      res.statusCode = 404;
      break;
  }

  //send whole html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      //if there is only one html file to read then we can use the method below
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
