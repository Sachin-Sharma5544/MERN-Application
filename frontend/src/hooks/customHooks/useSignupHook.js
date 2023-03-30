import { useState } from "react";
import { useAuthContext } from "../useAuthContext";

const useSignupHook = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signupFunction = async (email, password) => {
        //setting up state before starting any operation
        setError(null);
        setIsLoading(true);

        const response = await fetch("http://localhost:4000/user/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const jsonData = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(jsonData.error);
        }

        if (response.ok) {
            //setup the localstorage
            localStorage.setItem("user", JSON.stringify(jsonData));

            //updating the auth context
            dispatch({ type: "LOGIN", payload: jsonData });
            setIsLoading(false);
        }
    };

    return { signupFunction, error, isLoading };
};

export default useSignupHook;
