import {Routes, Route } from "react-router-dom";
import { Login } from "../components/login";
import { PrivateRouter } from "./PrivateRouter";

export const PublicRouter = () => {

    return(
        <>
        <Routes>
            <Route path="loggin" element={<Login/>}></Route>
            <Route path="/*" element={<PrivateRouter/>}/>
        </Routes>
        </>
    )
    
}