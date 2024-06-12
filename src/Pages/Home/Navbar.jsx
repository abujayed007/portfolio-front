import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
    const {user , logOut} = useContext(AuthContext)
    const navlinks = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link href='#projects'>Projects</Link></li>
        <li><Link>Blogs</Link></li>
        <li><Link>Skills</Link></li>
    </>

    const handleLogout = () =>{
        logOut()
    }
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  text-lg mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {navlinks}
                </ul>
            </div>
            <div className="flex space-x-3 navbar-end">
               {user?.email === 'abujayed007@gmail.com'  ?   <>
                <Link to='/dashboard'>My Dashboard</Link>
                <Link onClick={handleLogout}>Log Out</Link>
                </> : <> 
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </> }
            </div>
        </div>
    );
};

export default Navbar;

