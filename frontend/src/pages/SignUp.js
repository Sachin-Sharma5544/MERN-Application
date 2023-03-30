import React, { useState } from "react";
import useSignupHook from "../hooks/customHooks/useSignupHook";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signupFunction, error, isLoading } = useSignupHook();

    const signupFormSubmitHandler = async (e) => {
        e.preventDefault();
        await signupFunction(email, password);
    };

    return (
        <div className="signup">
            <h3>Sign Up </h3>

            <form onSubmit={signupFormSubmitHandler}>
                <label>Email: </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password: </label>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button disabled={isLoading}>Sign Up</button>

                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

export default SignUp;
