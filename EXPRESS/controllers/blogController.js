const Blog = require("../models/blog");

//blog_index, blog_details, blog_creater_get, blog_create_post, blog_delete

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  // console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "Blog details" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_creater_get = (req, res) => {
  res.render("blogs/create", { title: "create a new blog" });
};
const blog_creater_post = (req, res) => {
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
};

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  blog_index,
  blog_details,
  blog_creater_get,
  blog_creater_post,
  blog_delete,
};
