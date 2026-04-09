// Handles requests related to movie
const express=require("express");
const {authMiddleware}=require("../middleware/authMiddleware");
const {
    getHome,
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
}=require("../controllers/movieController");
const roleMiddleware=require("../middleware/roleMiddleware");
const router=express.Router();
// sends request to home page
router.get("/",getHome);
// sends request to get all movies
router.get("/movies",getAllMovies);
// gets the movie by its Id
router.get("/movies/:id",getMovieById);
// sends request to create movie
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
// sends request to update movie detail's
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);
// sends request to delete a movie
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deleteMovie);

module.exports=router;