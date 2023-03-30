import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <div className="login">
            <h3>Login </h3>

            <form onSubmit={loginHandler}>
                <label>Email: </label>
                <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <label>Password: </label>
                <input
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
