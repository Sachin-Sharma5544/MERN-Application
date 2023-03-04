const Workout = require("../models/workouts");
const mongoose = require("mongoose");

//Get All Workouts
exports.getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 });
        res.status(201).json(workouts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Get Single Workout
exports.getSingleWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such workout exists" });
    }
    try {
        const workout = await Workout.findOne({ _id: id });
        if (!workout) {
            return res.status(404).json({ error: "No such workout found" });
        }
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Post a new Workout
exports.postNewWorkout = async (req, res, next) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Delete a new Workout
exports.deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such workout exists" });
    }

    try {
        const workout = await Workout.findOneAndDelete({ _id: id });
        if (!workout) {
            return res
                .status(404)
                .json({ error: "Can't delete workout as it does not exists" });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Patch a new Workout
exports.patchWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such workout exists" });
    }

    const workout = await Workout.findOneAndUpdate(
        { _id: id },
        { ...req.body }
    );
    if (!workout) {
        return res
            .status(404)
            .json({ error: "Can't update workout as it does not exists" });
    }
    res.status(200).json(workout);
};
