// this returns a function called express
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app
//we are just invoking the express function.
const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://RoshanChau11:cr7chaudhary@noderoshan.a8gbrsg.mongodb.net/Nodetuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

//middleware & static files
app.use(express.static("public")); //we can acess any static files in the public folder

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// mongoose and mongo sandbox routes
// so we have created a new route and sent a req as well as got the response here when the call back function fires, we have created a new blog using the Blog we have imported the we have used the save method to save the data into the data base and then since it is a async task so it returns a promise  which takes certain time and so we can use the .then method so that it returns the result as a promise and the we have sent it as a response using blog.then method

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog2",
//     snippet: " about my new blog",
//     body: "more about my blog",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("63d6ba4b3eae8e19b05411d3")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
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

  // const blogs = [
  //   { title: "who is she", snippet: "lorem ipsum 1fkdsajflsdjfdksl fjsljfd " },
  //   {
  //     title: "best of the best",
  //     snippet: "lorem ipsum 1fkdsajflsdjfdksl fjsljfd ",
  //   },
  //   {
  //     title: "math mathi mathi mathi",
  //     snippet: "lorem ipsum 1fkdsajflsdjfdksl fjsljfd ",
  //   },
  // ];
  // res.render("index", { title: "Home", blogs });

  res.redirect("/blogs");
});

//respond to the get request at the url "/about"
app.get("/about", (req, res) => {
  //   res.send("<p>HELLO about page</p>");
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "about" });
});

//blog routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Make sure you place the blogs/create GET route ABOVE the /blogs/:id GET route in the code. Otherwise express will fire the /blogs/:id handler for requests to /blogs/create.
app.get("/blogs/create", (re1, res) => {
  res.render("create", { title: "create a new blog" });
});

//route parameters
// anything that is variable in the routes like id are called route paremeters.
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  Blog.findById("id")
    .then((result) => {
      res.render("details", { blog: result, title: "Blog details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//redirects

// app.get("/about-me", (req, res) => {
//   res.redirect("/about");
// });

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
