import { Outlet } from "react-router";
import NavBar from "../pages/NavBar";

function Layout() {
    return ( 
        <div className="w-full h-dvh flex flex-col justify-center items-center">
            <div className="w-full h-auto">
                <NavBar />
            </div>
            <div className="flex-1 w-full flex justify-center items-center">
                <Outlet />
            </div>
            <div className="border w-full">Footer</div>
        </div>
     );
}

export default Layout;