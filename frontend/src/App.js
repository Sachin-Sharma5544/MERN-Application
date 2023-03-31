import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddWorkout from "./pages/AddWorkout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
    const { user } = useAuthContext();
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                user ? (
                                    <Home />
                                ) : (
                                    <Navigate to={"/user/login"} />
                                )
                            }
                        ></Route>
                        <Route
                            path="/workout"
                            element={
                                user ? (
                                    <AddWorkout />
                                ) : (
                                    <Navigate to={"/user/login"} />
                                )
                            }
                        ></Route>
                        <Route
                            path="/user/signup"
                            element={!user ? <SignUp /> : <Navigate to={"/"} />}
                        ></Route>
                        <Route
                            path="/user/login"
                            element={!user ? <Login /> : <Navigate to={"/"} />}
                        ></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
