const workoutController = require("../controllers/workoutControllers");
const newWorkoutController = require("../controllers/workoutContAsyncAwait");
const requireAuth = require("../middleware/requireAuth");

const router = require("express").Router();

// require auth for all workout routes
router.use(requireAuth);

/* this request goes to the controller, with promise syntax */

//Get All Workouts
// router.get("/", workoutController.getAllWorkouts);

//Get Single Workout
// router.get("/:id", workoutController.getSingleWorkout);

//Post a new Workout
// router.post("/", workoutController.postNewWorkout);

//Delete a new Workout
// router.delete("/:id", workoutController.deleteWorkout);

//Update a new Workout
router.patch("/:id", workoutController.patchWorkout);

/* this request goes to the controller, with async await syntax*/

//Get All Workouts
router.get("/", newWorkoutController.getAllWorkouts);

//Get Single Workout
router.get("/:id", newWorkoutController.getSingleWorkout);

//Post a new Workout
router.post("/", newWorkoutController.postNewWorkout);

//Delete a new Workout
router.delete("/:id", newWorkoutController.deleteWorkout);

//Update a new Workout
// router.patch("/:id", newWorkoutController.patchWorkout);

module.exports = router;
