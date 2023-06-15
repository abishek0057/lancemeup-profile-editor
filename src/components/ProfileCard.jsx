import React from "react";
import marker from "../assets/map-marker.png";

const ProfileCard = () => {
  return (
    <div className='relative flex flex-col justify-center items-center max-w-xs sm:max-w-sm border-2 border-blue-200 rounded-lg p-6 py-10 shadow-xl shadow-slate-400 bg-lime-100'>
      <div className='absolute border bg-slate-500 rounded-lg rounded-bl-none rounded-br-none top-0 w-full h-2/6'></div>
      <div className='w-44 h-44 border-4 border-white rounded-full overflow-hidden z-10 self-start'>
        <img src='/ap.jpg' alt='profile picture' className='block w-full' />
      </div>
      <h1 className='text-xl font-bold pt-3'>Abishek Parajuli</h1>
      <h3 className='text-sm font-medium pt-1'>Web Developer</h3>
      <div className='self-start pt-3 flex items-center'>
        <img src={marker} alt='marker' className='inline-block w-4 mr-1' />
        <h2>Haldibari, Jhapa, Nepal</h2>
      </div>
      <p className='text-justify pt-4'>
        I am an undergraduate Computer Science (BSc. CSIT) student at Tribhuvan
        University with a keen interest in Web Development and Software
        Engineering. With a good foundation in JavaScript.
      </p>
      <button className='absolute bottom-2 right-2 hover:scale-110 hover:bg-slate-300 bg-slate-200 p-2 rounded-full text-xs'>
        ✏
      </button>
    </div>
  );
};

export default ProfileCard;
