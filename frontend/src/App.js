import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddWorkout from "./pages/AddWorkout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/workout" element={<AddWorkout />}></Route>
                        <Route path="/user/signup" element={<SignUp />}></Route>
                        <Route path="/user/login" element={<Login />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
