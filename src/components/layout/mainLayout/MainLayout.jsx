import { Outlet } from "react-router-dom";

 export const MainLayout = () =>{
    return(
        <main className="App overflow-auto vh-100">
            <Outlet/>
        </main>
    )
}