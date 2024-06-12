import { TfiEmail } from 'react-icons/tfi';
import image from '../../assets/Images/image.jpg'
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Banner = () => {
    return (
        <div className="p-10">
            <div className="hero p-10 ">
            <div className="hero-content flex-col lg:flex-row-reverse space-x-5">
                <img  src={image} className=" w-[550px] rounded-full bg-black shadow-2xl" />
                <div className=''>
                    <h1 className="text-5xl font-bold">Ibne Abu Jayed</h1>
                    <h2 className="text-2xl">React Front-End-Developer</h2>
                    <a href='mailto:abujayed007@gmail.com' target='/'><p className="py-6 text-xl text-white flex items-center gap-x-3"><TfiEmail/> abujayed007@gmail.com</p></a>
                    <div className='flex gap-x-3'>
                     <a href="https://github.com/abujayed007" target='/' className='text-2xl'><FaGithub/></a>
                     <a href='https://www.linkedin.com/in/ibne-abu-jayed-318126224/' target='/' className='text-2xl'><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;

<div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>