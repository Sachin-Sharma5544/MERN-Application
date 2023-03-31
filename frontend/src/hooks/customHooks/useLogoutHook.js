import { useAuthContext } from "../useAuthContext";

const useLogoutHook = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        //removing the local storage auth token
        localStorage.removeItem("user");
        //Dispatch logout action
        dispatch({ type: "LOGOUT" });
    };

    return { logout };
};

export default useLogoutHook;
