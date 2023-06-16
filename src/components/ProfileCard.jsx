import React, { useState, useRef } from "react";
import marker from "../assets/map-marker.png";
import camera from "../assets/camera.png";

const ProfileCard = ({ state, setEditMode }) => {
  const [profileImg, setProfileImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  const imageref = useRef(null);

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImg(imageUrl);
      console.log(imageUrl);
    }
  };

  return (
    <div className='relative flex flex-col justify-center items-center max-w-xs sm:max-w-sm border-2 border-blue-200 rounded-lg p-6 py-10 shadow-xl shadow-slate-400 bg-lime-100'>
      <div className='absolute border bg-slate-500 rounded-lg rounded-bl-none rounded-br-none top-0 w-full h-2/6'></div>
      <div className=' relative self-start'>
        <div className='w-44 h-44 border-4 border-white rounded-full overflow-hidden z-10 flex justify-center items-center'>
          <img
            src={profileImg}
            alt='profile picture'
            className='block w-full'
          />
        </div>
        <div
          className='absolute block bottom-5 right-3 z-30 w-7 bg-lime-200 rounded-full p-1 hover:cursor-pointer hover:bg-lime-400'
          onClick={(e) => imageref.current.click()}
          title='Change Picture'
        >
          <img src={camera} alt='camera Icon' className='p-px' />
          <input
            type='file'
            className='hidden'
            accept='images/*'
            ref={imageref}
            onChange={handleImageUpload}
          />
        </div>
      </div>
      <h1 className='text-xl font-bold pt-3'>{`${state.firstName} ${state.middleName} ${state.lastName}`}</h1>
      <h3 className='text-sm font-medium pt-1'>{state.role}</h3>
      <div className='self-start pt-3 flex items-center'>
        <img src={marker} alt='marker' className='inline-block w-4 mr-1' />
        <h2>{`${state.town}, ${state.district}, ${state.country}`}</h2>
      </div>
      <p className='text-justify pt-4'>{state.bio}</p>
      <button
        className='absolute bottom-2 right-2 hover:scale-110 hover:bg-slate-300 bg-slate-200 p-2 rounded-full text-xs'
        onClick={() => setEditMode(true)}
      >
        ✏
      </button>
    </div>
  );
};

export default ProfileCard;
