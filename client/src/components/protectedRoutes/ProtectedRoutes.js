import { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./UserContext";
import Cart from "../Cart";





const ProtectedRoutes = (children) => {
    const [login, setLogin] = useState(false);
    const {user} = useContext(UserContext);
    
    if (user != '') {
        setLogin(true);
    }
    
    return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;

