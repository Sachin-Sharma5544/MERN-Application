import { useState } from "react";
import { useAuthContext } from "../useAuthContext";

const useLoginHook = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsloading] = useState(null);
    const { dispatch } = useAuthContext();

    const loginFunction = async (email, password) => {
        setIsloading(true);
        setError(null);

        const response = await fetch("http://localhost:4000/user/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const jsonData = await response.json();

        if (!response.ok) {
            setIsloading(false);
            setError(jsonData.error);
        }

        if (response.ok) {
            //localstorage setting
            localStorage.setItem("user", JSON.stringify(jsonData));

            //update auth context
            dispatch({ type: "LOGIN", payload: jsonData });
            setIsloading(false);
        }
    };

    return { loginFunction, error, isLoading };
};

export default useLoginHook;
