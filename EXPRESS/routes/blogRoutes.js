const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

//blog routes
router.post("/", blogController.blog_creater_post);
router.get("/", blogController.blog_index);

// Make sure you place the blogs/create GET route ABOVE the /blogs/:id GET route in the code. Otherwise express will fire the /blogs/:id handler for requests to /blogs/create.
router.get("/create", blogController.blog_creater_get);

//route parameters
// anything that is variable in the routes like id are called route paremeters.
router.get("/:id", blogController.blog_details);

router.delete("/:id", blogController.blog_delete);

//redirects

// router.get("/about-me", (req, res) => {
//   res.redirect("/about");
// });

module.exports = router;
