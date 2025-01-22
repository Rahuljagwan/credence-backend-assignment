const express = require("express");
const {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

const router = express.Router();

router.post("/", createMovie); // Create a new movie
router.get("/", getAllMovies); // Get all movies
router.get("/:id", getMovieById); // Get a movie by ID
router.put("/:id", updateMovie); // Update a movie by ID
router.delete("/:id", deleteMovie); // Delete a movie by ID

module.exports = router;
