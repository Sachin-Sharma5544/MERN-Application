import { Link } from "react-router-dom";

const Button = ({ btnName, handleFunction }) => {
    return (
        <div className="button">
            <Link to="/workout">{btnName}</Link>
        </div>
    );
};

export default Button;
