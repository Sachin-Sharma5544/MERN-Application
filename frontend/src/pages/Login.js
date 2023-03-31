import { useState } from "react";
import useLoginHook from "../hooks/customHooks/useLoginHook";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginFunction, error, isLoading } = useLoginHook();

    const loginHandler = async (e) => {
        e.preventDefault();
        // console.log(email, password);
        await loginFunction(email, password);
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

                <button disabled={isLoading}>Login</button>

                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

export default Login;
