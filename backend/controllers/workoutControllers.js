const Workout = require("../models/workouts");
const mongoose = require("mongoose");

//Get All Workouts
exports.getAllWorkouts = (req, res) => {
    Workout.find({})
        .sort({ createAt: -1 })
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
};

//Get Single Workout
exports.getSingleWorkout = (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such workout exists" });
    }
    Workout.find({ _id: id })
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
};

//Post a new Workout
exports.postNewWorkout = (req, res, next) => {
    const { title, reps, load } = req.body;

    const workout = new Workout({ title, reps, load });
    workout
        .save()
        .then((data) => {
            console.log(data);
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
};

//Delete a new Workout
exports.deleteWorkout = (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such workout exists" });
    }

    Workout.findOneAndDelete({ _id: id })
        .then((data) => {
            if (!data) {
                return res.status(404).json({
                    error: "Can't delete workout as it does not exists",
                });
            }
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ error: error.messgae });
        });
};

//Patch a new Workout
exports.patchWorkout = (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such workout exists" });
    }

    Workout.findOneAndUpdate({ _id: id }, { ...req.body })
        .then((data) => {
            if (!data) {
                return res.status(404).json({
                    error: "Can't delete workout as it does not exists",
                });
            }
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ error: error.messgae });
        });
};
