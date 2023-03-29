import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkoutForm = () => {
    const [title, setTitle] = useState("");
    const [reps, setReps] = useState("");
    const [load, setLoad] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
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
            setEmptyFields(jsonData.emptyFields);
        }

        if (response.ok) {
            setError(null);
            setTitle("");
            setLoad("");
            setReps("");
            navigate("/");
            setEmptyFields([]);
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
                    className={emptyFields.includes("title") ? "Error" : null}
                />
                {emptyFields.includes("title") ? (
                    <p>Please enter title</p>
                ) : null}

                <label>Reps: </label>
                <input
                    type="number"
                    id="reps"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    className={emptyFields.includes("reps") ? "Error" : null}
                />
                {emptyFields.includes("reps") ? <p>Please enter reps</p> : null}

                <label>Load: </label>
                <input
                    type="number"
                    id="load"
                    value={load}
                    onChange={(e) => setLoad(e.target.value)}
                    className={emptyFields.includes("load") ? "Error" : null}
                />
                {emptyFields.includes("load") ? <p>Please enter load</p> : null}

                <button>Add Workout</button>
            </form>
        </div>
    );
};
export default WorkoutForm;
