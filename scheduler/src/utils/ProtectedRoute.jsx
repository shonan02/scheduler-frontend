import { useState, useEffect } from "react";
import { useNavigate, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
    const navigate = useNavigate();

    const [isLoggedin, setIsLoggedin] = useState(false);

    const checkToken = () => {
        //Need to re implement this using redux state manangement
        const token = localStorage.getItem("user-token");

        if(!token || token === undefined) {
            setIsLoggedin(false);
            return navigate("/login");
        }

        setIsLoggedin(true);
    }

    useEffect(() => {
        checkToken();
    }, [isLoggedin]);

    return (
        <>
        {
            isLoggedin ? props.children: null
        }
        </>
    )
}

export default ProtectedRoute;