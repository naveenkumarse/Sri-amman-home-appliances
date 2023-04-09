import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";


const ProtectedRoutes = (children) => {

    const [login, setLogin] = useState(false);
    const { user } = useContext(UserContext);
    useEffect(() => {
        
        if (user != '') {
            setLogin(true);
        }
    }, [user])

    return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;

