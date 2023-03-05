import { useState, useEffect } from "react";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("http://localhost:4000/workouts");
            console.log(response);
            const jsonData = await response.json();
            console.log(jsonData);
            if (response.ok) {
                setWorkouts(jsonData);
            }
        };

        fetchWorkouts();
    }, []);

    return (
        <div className="home">
            <h2>Home page</h2>
            {workouts &&
                workouts.map((workout) => (
                    <div className="workout__container" key={workout._id}>
                        <p>{workout.title}</p>
                        <p>{workout.load}</p>
                        <p>{workout.reps}</p>
                    </div>
                ))}
        </div>
    );
};

export default Home;
