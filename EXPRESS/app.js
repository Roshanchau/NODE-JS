// this returns a function called express
const express = require("express");

// express app
//we are just invoking the express function.
const app = express();

//listening to a request to the express appp.
app.listen(3000);

//responding to a request. just like we did in the node js(server js) we route to the url here .
app.get("/", (req, res) => {
  // just like the res.write() method  but here we get the contentType inbuit .
  //   res.send("<p>HELLO home page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

//respond to the get request at the url "/about"
app.get("/about", (req, res) => {
  //   res.send("<p>HELLO about page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirects

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//404 page
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
