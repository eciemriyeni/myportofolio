import React from 'react';
import whatsapp from "../../img/logos_whatsapp-icon.svg";
import linkedin from "../../img/devicon_linkedin.svg";
import gmail from "../../img/logos_google-gmail.svg";

const Link = [
    { url: whatsapp, link: "wa.me/089530669207" },
    { url: linkedin, link: "linkedin.com/in/eci-emriyeni" },
    { url: gmail, link: "x" }
];

const Footer = () => {
    return (
        <div className='bg-[#427D9D] h-[14rem] my-auto mx-auto pt-20 mt-5'>
            <h1 className='text-center font-bold text-white font-[Poppins] my-auto text-4xl'>Contact Me</h1>
            <div className='flex mx-auto justify-center space-x-5 mt-5'>
                {Link.map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                        <img className='w-10 items-center' src={item.url} alt="" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Footer;
