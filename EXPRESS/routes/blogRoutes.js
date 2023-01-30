const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();

//blog routes
router.post("/", (req, res) => {
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
router.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Make sure you place the blogs/create GET route ABOVE the /blogs/:id GET route in the code. Otherwise express will fire the /blogs/:id handler for requests to /blogs/create.
router.get("/create", (re1, res) => {
  res.render("create", { title: "create a new blog" });
});

//route parameters
// anything that is variable in the routes like id are called route paremeters.
router.get("/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog details" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//redirects

// router.get("/about-me", (req, res) => {
//   res.redirect("/about");
// });

module.exports = router;
