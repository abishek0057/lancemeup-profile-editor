import React from "react";
import marker from "../assets/map-marker.png";

const ProfileCard = () => {
  return (
    <div className='relative flex flex-col justify-center items-center max-w-xs sm:max-w-sm border-2 border-blue-200 rounded-lg p-6 shadow-xl shadow-slate-400 bg-lime-100'>
      <div className='absolute border bg-slate-500 rounded-lg rounded-br-none rounded-bl-none ron top-0 w-full h-2/6'></div>
      <div className='w-44 h-44 border-4 border-blue-200 rounded-full overflow-hidden z-10'>
        <img src='/ap.jpg' alt='profile picture' className='block w-full' />
      </div>
      <h1 className='text-xl font-bold pt-3'>Abishek Parajuli</h1>
      <h3 className='text-sm font-medium pt-1'>Web Developer</h3>
      <div className='self-start pt-3'>
        <h2>
          <img src={marker} alt='marker' className='inline-block w-4 mr-1' />
          Haldibari, Jhapa, Nepal
        </h2>
      </div>
      <p className='text-justify pt-5'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum officiis
        nemo obcaecati, sint velit explicabo accusantium, amet dolorem quia,
        nulla cupiditate! Ut quas eligendi?
      </p>
    </div>
  );
};

export default ProfileCard;
