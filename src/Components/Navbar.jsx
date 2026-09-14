import React from 'react';
import Logo from "../assets/logo-text.png"
const Navbar = () => {
    return (
      <div className='sticky top-0 z-50 bg-white'>
          <div className='flex justify-between items-center container mx-auto py-5 '>
            <button className="md:hidden text-3xl">☰</button>
            <img src={Logo} alt="" />
               
            <ul className='hidden md:flex font-semibold  gap-8 items-center'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div>
                <button className='btn rounded-r-none'>SignIn</button>
                <button className='btn btn-accent rounded-l-none'>SignUp</button>
            </div>
        </div>
      </div>
    );
};

export default Navbar;