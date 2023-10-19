const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const bookmarkController = require("./controllers/bookmarkController");
const reviewsController = require("./controllers/reviewsController");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/bookmarks", bookmarkController);
// app.use("/reviews", reviewsController);

// GET - /bookmarks - get all bookmarks
// POST - /bookmarks - create bookmark
// GET - /bookmarks  - get bookmark by id
// PUT - /bookmarks - update bookmark by id
// DELETE - /bookmarks - delete bookmark by id

// GET - /reviews - get all reviews
// POST - /review - create review
// GET - /reviews  - get review by id
// PUT - /reviews - update review by id
// DELETE - /reviews - delete review by id

/*
  /bookmarks/:id/reviews
  
*/

app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
