import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, NavLink } from 'react-router-dom';
import "./Nav.css"
const Navbar = () => {
    const links = [
        { name: "Home", target: "/" },
        { name: "Experience", target: "/experience" },
        { name: "Project", target: "/project" },
        { name: "Licenses & Certifications ", target: "/licenses" },
    ];
    const [open, setOpen] = useState(false);

    const handleMenuClick = () => {
        setOpen(!open);
    };




    return (
        <div className='shadow-md bg-white w-full fixed top-0 left-0 landing z-30 font-[Poppins]'>
            <div className='md:flex items-center bg- justify-center landing  py-4 md:px-10 px-7 md:h-20 h-14'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                </div>
                <div onClick={handleMenuClick} className='absolute right-8 bg-white  cursor-pointer md:hidden w-7 h-fit'>
                    {open ? <XMarkIcon className='text-black' /> : <Bars3BottomRightIcon className='text-black' />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-white absolute md:static  md:z-auto landing z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : '-top-full'} ${open ? '' : 'hidden'}`}>
                    {links.map((link, index) => (
                        <li key={index} className='md:ml-8 md:my-0 my-7 font-bold'>
                            <NavLink
                                to={link.target}
                                exact="true"
                                className='text-black hover:text-[#427D9D] active:text-[#427D9D] duration-500'
                                activeClassName="active"
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default Navbar;
