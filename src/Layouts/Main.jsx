import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;