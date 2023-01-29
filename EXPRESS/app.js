// this returns a function called express
const express = require("express");
const morgan = require("morgan");

// express app
//we are just invoking the express function.
const app = express();

//register view engine
app.set("view engine", "ejs");

//listening to a request to the express appp.
app.listen(3000);

//middleware & static files
app.use(express.static("public")); //we can acess any static files in the public folder

app.use(morgan("dev"));

// app.use((req, res, next) => {
//   //middleware between req and response
//   console.log("new request made");
//   console.log("host:", req.hostname);
//   console.log("path:", req.path);
//   console.log("method:", req.hostname);
//   next(); // move from the middleware to the next function app.get
// });

// app.use((req, res, next) => {
//   console.log("In to the next middleware");
//   next();
// });
//responding to a request. just like we did in the node js(server js) we route to the url here .
app.get("/", (req, res) => {
  // just like the res.write() method  but here we get the contentType inbuit .
  //   res.send("<p>HELLO home page</p>");
  //   res.sendFile("./views/index.html", { root: __dirname });

  const blogs = [
    { title: "who is she", snippet: "lorem ipsum 1fkdsajflsdjfdksl fjsljfd " },
    {
      title: "best of the best",
      snippet: "lorem ipsum 1fkdsajflsdjfdksl fjsljfd ",
    },
    {
      title: "math mathi mathi mathi",
      snippet: "lorem ipsum 1fkdsajflsdjfdksl fjsljfd ",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

//respond to the get request at the url "/about"
app.get("/about", (req, res) => {
  //   res.send("<p>HELLO about page</p>");
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "about" });
});

app.get("/blogs/create", (re1, res) => {
  res.render("create", { title: "create a new blog" });
});

//redirects

// app.get("/about-me", (req, res) => {
//   res.redirect("/about");
// });

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
