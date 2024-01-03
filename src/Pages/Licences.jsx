import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import sertif from "../img/sertifikat/sertif"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import kb from "../img/sertifikat/Certificate of Kampung Budaya_page-0001.jpg";
import mtqm from "../img/sertifikat/Certificate of MTQMN XVII 2023_page-0001.jpg";
import py1 from "../img/sertifikat/Certificate of Python (Basic)_page-0001.jpg";
import py2 from "../img/sertifikat/Certificate of Python for Data Analysis_page-0001.jpg";
import rakamin from "../img/sertifikat/Certificate of Rakamin Data Science_page-0001.jpg";
import revou from "../img/sertifikat/Certificate of RevoU_page-0001.jpg";
import sql1 from "../img/sertifikat/Certificate of SQL (Basic)_page-0001.jpg";
import sql2 from "../img/sertifikat/Certificate of SQL Advanced_page-0001.jpg";
import dpm1 from "../img/sertifikat/Certificate of Staff Ahli DPM FILKOM UB_page-0001.jpg";
import dpm2 from "../img/sertifikat/Certificate of Staff Muda DPM FILKOM UB_page-0001.jpg";
import Footer from '../Components/Footer/Footer';
const Licences = () => {
    return (
        <div className='bg-[#427D9D] '>
            <Navbar />

            <div className=' h-full font-[Poppins] '>
                <h1 className='text-4xl text-white font-bold mt-20 px-20 pt-5'> My Licenses & Certification</h1>
            </div>
            <Carousel />
            <Footer />
        </div>
    )
}
const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='lg:px-20 '>
            <Slider {...settings}>
                {Object.values({
                    kb,
                    mtqm,
                    py1,
                    py2,
                    rakamin,
                    revou,
                    sql1,
                    sql2,
                    dpm1,
                    dpm2,
                }).map((item, index) => (
                    <div key={index}>
                        <img className='lg:p-20 p-5' src={item} alt={`carousel-item-${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default Licences