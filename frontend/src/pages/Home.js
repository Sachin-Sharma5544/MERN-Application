import { useEffect } from "react";
import Button from "../components/Button";
import WorkoutDetails from "../components/WorkoutDetails";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
    // const [workouts, setWorkouts] = useState(null);
    const { workouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("http://localhost:4000/workouts");
            const jsonData = await response.json();
            if (response.ok) {
                dispatch({ type: "SET_WORKOUTS", payload: jsonData });
            }
        };

        fetchWorkouts();
    }, []);

    const deleteWorkoutHandler = async (id) => {
        const response = await fetch("http://localhost:4000/workouts/" + id, {
            method: "DELETE",
        });
        const jsonData = await response.json();
        if (response.ok) {
            dispatch({ type: "DELETE_WORKOUT", payload: jsonData });
        }
    };

    return (
        <div className="home">
            <h2>Workout Details</h2>
            <Button btnName="Add Workout" />
            {workouts &&
                workouts.map((workout) => (
                    <WorkoutDetails
                        workout={workout}
                        deleteWorkoutHandler={deleteWorkoutHandler}
                        key={workout._id}
                    />
                ))}
        </div>
    );
};

export default Home;
