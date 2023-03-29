import React from "react";

const WorkoutDetails = ({ workout, deleteWorkoutHandler }) => {
    return (
        <div className="workout__details">
            <div className="workout__container">
                <h4>{workout.title}</h4>
                <p>
                    <strong>Load (kg)</strong>: {workout.load}
                </p>
                <p>
                    <strong>Reps</strong>: {workout.reps}
                </p>
                <p>{workout.createdAt}</p>
            </div>
        </div>
    );
};

export default WorkoutDetails;
