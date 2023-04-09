import { useContext, useEffect, useState } from "react";

import { UserContext } from "./UserContext";
import Login from "../login/login";
import NavBar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";


const ProtectedRoutes = (children) => {

    const [login, setLogin] = useState(false);
    const { user } = useContext(UserContext);
    useEffect(() => {
        
        if (user != '') {
            setLogin(true);
        }
    }, [user])
    
    return login ? <Outlet/> : <div><NavBar/><Login/></div>;
};

export default ProtectedRoutes;

