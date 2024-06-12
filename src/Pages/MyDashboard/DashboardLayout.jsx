import { VscThreeBars } from "react-icons/vsc";
import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center mt-10">
                <Outlet/>
            </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><VscThreeBars/></label>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/dashboard/addproject'>Add Project</Link></li>
                    <li><Link to='/dashboard/myproject'>My Projects</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;