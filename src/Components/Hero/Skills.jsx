import React from 'react';
import itemSkill from './img/itemSkil';
import itemLang from "./img/itemLang"
const Skills = () => {
    return (
        <div className='w-3/4 mx-auto justify-center font-[Poppins] mt-20'>
            <h1 className='text-center text-[#164863] font-bold text-4xl'>Skills</h1>
            <div className=''>
                <h1 className='bg-[#9BBEC8] p-2 w-24 text-center rounded-md'>Tools</h1>
            </div>
            <div className=' lg:grid-cols-3 grid-cols-2 grid w-full  gap-x-20 mx-auto  gap-y-7'>
                {Object.values(itemSkill).map((icon, index) => (
                    <img className='justify-center mx-auto  items-center my-auto' key={index} src={icon} alt={`skill-icon-${index}`} />
                ))}
            </div>
            <Tools />
        </div>
    );
};
const Tools = () => {
    return (
        <div>
            <div className='mt-20'>
                <h1 className='bg-[#9BBEC8] p-2 w-60 text-center rounded-md'>Programming Languange</h1>
            </div>
            <div className=' lg:grid-cols-3 grid-cols-2 grid w-full gap-x-20 mx-auto  gap-y-7'>
                {Object.values(itemLang).map((icon, index) => (
                    <img className='justify-center mx-auto mt-5 items-center my-auto' key={index} src={icon} alt={`skill-icon-${index}`} />
                ))}
            </div>
        </div>
    )
}

export default Skills;
