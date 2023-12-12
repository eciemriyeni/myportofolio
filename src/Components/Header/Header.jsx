import React from 'react';
import bg from "../../img/wave.png";
import Foto from "../../img/foto.png";
import About from './About';

const Header = () => {
    const headerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: '', // Set background position to right
        textAlign: 'center',
    };

    return (
        <>
            <div className='bg-[#427D9D]  font-[Poppins]'  >
                <div style={headerStyle} className='h-screen  '>
                    <div className='mx-auto lg:w-3/5 justify-between lg:flex  my-auto      items-center' >
                        <div className='items-center lg:h-screen h-[50vh] my-auto justify-center flex'>
                            <h1 className='text-white lg:text-left  items-center  font-bold text-[35px] lg:text-[50px]'>Hello, <br /> I'm Eci Emriyeni</h1>
                        </div>
                        <div className=''>
                            <img src={Foto} className='lg:absolute hidden lg:block  lg lg:right-2 lg:bottom-0' alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <About />
        </>
    );
}

export default Header;
