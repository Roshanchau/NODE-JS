// this returns a function called express
const express = require("express");

// express app
//we are just invoking the express function.
const app = express();

//register view engine
app.set("view engine", "ejs");

//listening to a request to the express appp.
app.listen(3000);

//responding to a request. just like we did in the node js(server js) we route to the url here .
app.get("/", (req, res) => {
  // just like the res.write() method  but here we get the contentType inbuit .
  //   res.send("<p>HELLO home page</p>");
  //   res.sendFile("./views/index.html", { root: __dirname });
  res.render("index");
});

//respond to the get request at the url "/about"
app.get("/about", (req, res) => {
  //   res.send("<p>HELLO about page</p>");
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about");
});

app.get("/blogs/create", (re1, res) => {
  res.render("create");
});

//redirects

// app.get("/about-me", (req, res) => {
//   res.redirect("/about");
// });

//404 page
app.use((req, res) => {
  res.status(404).render("404");
});
