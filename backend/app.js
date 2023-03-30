const workoutsRoute = require("./routes/workouts");
const userRoute = require("./routes/user");

require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

//Middleware

//This middleware helps us read data trom the body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    //This middleware to print the method type and path
    console.log(req.method, req.path);
    next();
});

app.use("/workouts", workoutsRoute);
app.use("/user", userRoute);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to database");
        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
