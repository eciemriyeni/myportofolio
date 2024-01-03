import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Line from "../img/Line.png"
import bg from "../img/bg.png"
import datasains from '../json/datasains'
import uiux from '../json/uiux'
import Footer from '../Components/Footer/Footer'



const CardDataSains = ({ title, date, skills }) => {
    const [showImage, setShowImage] = useState(false);

    const handleSeeMoreClick = () => {
        setShowImage(true);
    };

    const handleCloseClick = () => {
        setShowImage(false);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md ">
            <div className='flex  space-x-4  items-center'>
                <h2 className="text-md font-medium ">{title}</h2>
            </div>
            <div className='mt-2'>
                <p className="text-gray-600 text-sm">{date}</p>
                <ul className="list-disc pl-6">
                    {skills.map((skills, index) => (
                        <li key={index} className="text-gray-600 text-sm">{skills}</li>
                    ))}
                </ul>
            </div>
            <button onClick={handleSeeMoreClick} className='justify-center mx-auto flex mt-5 p-2 bg-[#164863] text-white font-normal rounded-md'>See More</button>
            {showImage && (
                <div className="fixed top-0 left-0 w-full  h-full bg-black bg-opacity-70 flex items-center justify-center">
                    <div className=" relative w-3/4 ">
                        {/* <img src={result} alt={company} className="lg:w-3/4 mx-auto " */}

                        {/* /> */}
                        <button
                            className=" lg:m-4 font-bold font-[Poppins] absolute lg:right-32 right-1 m-2 top-0 w-1/   text-white hover:text-black cursor-pointer"
                            onClick={handleCloseClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="   w-6 h-6 font-extrabold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
const CardUiUx = ({ title, date, skills }) => {
    const [showImage, setShowImage] = useState(false);

    const handleSeeMoreClick = () => {
        setShowImage(true);
    };

    const handleCloseClick = () => {
        setShowImage(false);
    };
    return (
        <div className="bg-white p-4 rounded-lg shadow-md ">
            <div className='flex  space-x-4  items-center'>
                <h2 className="text-md font-medium ">{title}</h2>
            </div>
            <div className='mt-2'>
                <p className="text-gray-600 text-sm">{date}</p>
                <ul className="list-disc pl-6">
                    {skills.map((skills, index) => (
                        <li key={index} className="text-gray-600 text-sm">{skills}</li>
                    ))}
                </ul>
            </div>
            <button onClick={handleSeeMoreClick} className='justify-center mx-auto flex mt-5 p-2 bg-[#164863] text-white font-normal rounded-md'>See More</button>
            {showImage && (
                <div className="fixed top-0 left-0 w-full  h-full bg-black bg-opacity-70 flex items-center justify-center">
                    <div className=" relative w-3/4 ">
                        {/* <img src={result} alt={company} className="lg:w-3/4 mx-auto " */}

                        {/* /> */}
                        <button
                            className=" lg:m-4 font-bold font-[Poppins] absolute lg:right-32 right-1 m-2 top-0 w-1/   text-white hover:text-black cursor-pointer"
                            onClick={handleCloseClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="   w-6 h-6 font-extrabold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
const Project = () => {

    return (
        <div>
            <Navbar />
            <div className='bg-[#427D9D] pb-5  font-[Poppins] '>
                <Navbar />
                <div className='w-3/4 mx-auto justify-center '>
                    <div className='pt-40'>
                        <div>
                            <h1 className='text-white lg:text-4xl text-2xl font-bold'>My Projects</h1>
                        </div>
                        <div className="flex items-center space-x-5 lg:mt-20 mt-5">
                            <h1 className='text-white font-semibold lg:text-2xl'>2022</h1>
                            <img src={Line} className='lg:w-full w-3/5' alt="" />
                            <h1 className='text-white font-semibold lg:text-2xl'>2023</h1>
                        </div>
                        <div className='bg-[#6194B1] h-20 w-3/4 rounded-lg  items-center flex justify-center m-auto mt-20'>
                            <h1 className='text-center font-bold text-white text-3xl '>As Data Scientist or Data Analysis</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                        {datasains.map((exp, index) => (
                            <CardDataSains key={index} {...exp} />
                        ))}
                    </div>
                    <div className='bg-[#6194B1] h-20 w-3/4 rounded-lg  items-center flex justify-center m-auto mt-20'>
                        <h1 className='text-center font-bold text-white text-3xl '>As UI/UX Designer</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                        {uiux.map((exp, index) => (
                            <CardUiUx key={index} {...exp} />
                        ))}
                    </div>
                    <Footer/>
                </div>
            </div></div>
    )
}

export default Project