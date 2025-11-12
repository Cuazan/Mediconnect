import { Outlet } from "react-router-dom";

 export const MainLayout = () =>{
    return(
        <main className="App">
            <Outlet/>
        </main>
    )
}