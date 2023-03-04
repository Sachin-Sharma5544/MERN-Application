const Workout = require("../models/workouts");

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
router.post("/", (req, res, next) => {
    const { title, reps, load } = req.body;

    const workout = new Workout({ title, reps, load });
    workout.save().then((data) => {
        console.log(data);
    });

    res.json({ mssg: "Record added successfully" });

    // Workout.create({ title, reps, load })
    //     .then((data) => {
    //         console.log(data);
    //         res.status(201).json(data);
    //     })
    //     .catch((error) => {
    //         res.status(400).json({ error: error.message });
    //     });

    // try {
    //     const workout = await Workout.create({ title, load, reps });
    //     res.status(200).json(workout);
    // } catch (error) {
    //     res.status(400).json({ error: error.message });
    // }
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
