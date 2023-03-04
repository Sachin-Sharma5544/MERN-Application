const router = require("express").Router();

//Get All Workouts
router.get("/", (req, res) => {
    res.json({ mssg: "All workouts fetched successfully" });
});

//Get Single Workout
router.get("/:id", (req, res) => {
    res.json({ mssg: "Single item fetched successfully" });
});

//Post a new Workout
router.post("/", (req, res) => {
    res.json({ mssg: "Record added successfully" });
});

//Post a new Workout
router.delete("/:id", (req, res) => {
    res.json({ mssg: "Record deleted successfully" });
});

//Post a new Workout
router.patch("/:id", (req, res) => {
    res.json({ mssg: "Record updated successfully" });
});

module.exports = router;
