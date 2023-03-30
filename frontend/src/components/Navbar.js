import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar__items">
                <div className="navbar__item">
                    <Link to="/">
                        <h1>Workout Buddy</h1>
                    </Link>
                </div>
                <div className="navbar__item">
                    <Link to="/user/login">Login</Link>
                    <Link to="/user/signup">Sign Up</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
