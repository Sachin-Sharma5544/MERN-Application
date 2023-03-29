import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkoutForm = () => {
    const [title, setTitle] = useState("");
    const [reps, setReps] = useState("");
    const [load, setLoad] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, reps, load };
        const response = await fetch("http://localhost:4000/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: { "Content-Type": "application/json" },
        });

        // console.log(response);

        const jsonData = await response.json();
        console.log(jsonData);

        if (!response.ok) {
            setError(jsonData.error);
        }

        if (response.ok) {
            setError(null);
            setTitle("");
            setLoad("");
            setReps("");
            navigate("/");
        }
    };

    return (
        <div className="workout__form">
            <h2>Add Workout</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Reps: </label>
                <input
                    type="number"
                    id="reps"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                />

                <label>Load: </label>
                <input
                    type="number"
                    id="load"
                    value={load}
                    onChange={(e) => setLoad(e.target.value)}
                />

                <button>Add Workout</button>
            </form>

            {error && <div>{error}</div>}

            {/* <p>title: {title}</p>
            <p>reps: {reps}</p>

            <p>load: {load}</p>

            <p>error: {error}</p> */}
        </div>
    );
};
export default WorkoutForm;
