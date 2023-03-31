import { Link } from "react-router-dom";
import useLogoutHook from "../hooks/customHooks/useLogoutHook";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogoutHook();
    const { user } = useAuthContext();

    const handleLogout = () => {
        logout();
    };

    return (
        <header className="navbar">
            <div className="navbar__items">
                <div className="navbar__item">
                    <Link to="/">
                        <h1>Workout Buddy</h1>
                    </Link>
                </div>
                {/* <div className="navbar__item">
                    <Link to="/user/login">Login</Link>
                    <Link to="/user/signup">Sign Up</Link>
                </div>
                <div className="navbar__item">
                    <button onClick={handleLogout}>Logout</button>
                </div> */}

                {!user && (
                    <div className="navbar__item">
                        <Link to="/user/login">Login</Link>
                        <Link to="/user/signup">Sign Up</Link>
                    </div>
                )}
                {user && (
                    <div className="navbar__item">
                        <span>{user.email}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
