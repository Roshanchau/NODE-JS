// requiring mongoose which is a ODM library(object Documnet mapping library ) like its name it helps to map or use other methods through the object documnets it creates model through which we can use diffferent methods.Through mongoose we can create different Schemas which is the structure for different types of data/documents.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating new Schema:- structure for different types of data/documents.
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//creating mongoose model -> we can use this model anytime we want to manipulate the database. below we will be creating the blog model of the blogSchema

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

//In this way we have created our blog Schema and blog model
