import React, { useState } from "react";

const ProfileInputCard = ({ dispatch, state, setEditMode }) => {
  const [validInp, setValidInp] = useState(true);
  const [textAreaChar, setTextAreaChar] = useState(state.bio.length);
  const hadleClick = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleDispatch = (e) => {
    if (e.target.id !== "bio")
      setValidInp(/^[a-zA-Z\s]+$/.test(e.target.value) ? true : false);
    if (e.target.id === "mname" && e.target.value.length <= 0)
      setValidInp(true);
    dispatch({
      type: e.target.id,
      inpValue: e.target.value,
    });
  };

  return (
    <form className='w-11/12 sm:max-w-fit relative flex flex-col gap-y-2 sm:gap-y-6 border-2 border-blue-200 rounded-lg sm:p-6 p-2 py-5 sm:py-10 shadow-xl shadow-slate-400 bg-lime-100'>
      <h1 className='text-center font-semibold text-2xl pb-6'>
        Update Information
      </h1>
      {!validInp && (
        <p className='text-red-700 self-center absolute top-20'>
          Fields must contain letters and cannot be empty
        </p>
      )}
      <div className='flex flex-col sm:flex-row  sm:gap-x-2 relative gap-y-2'>
        <input
          maxLength={10}
          id='fname'
          type='text'
          placeholder='First Name'
          className='p-1 py-2 rounded-md outline-none'
          onChange={(e) => handleDispatch(e)}
          value={state.firstName}
        />
        <input
          maxLength={10}
          id='mname'
          type='text'
          placeholder='Middle Name'
          className='p-1 py-2 rounded-md outline-none'
          onChange={(e) => handleDispatch(e)}
          value={state.middleName}
        />
        <input
          maxLength={10}
          id='lname'
          type='text'
          placeholder='Last Name'
          className='p-1 py-2 rounded-md outline-none'
          onChange={(e) => handleDispatch(e)}
          value={state.lastName}
        />
      </div>
      <input
        id='role'
        type='text'
        placeholder='Role'
        className='p-1 py-2 rounded-md outline-none sm:max-w-fit w-full'
        onChange={(e) => handleDispatch(e)}
        value={state.role}
      />
      <div className='flex flex-col sm:flex-row  sm:gap-x-2 relative gap-y-2'>
        <input
          id='town'
          type='text'
          placeholder='Town'
          className='p-1 py-2 rounded-md outline-none'
          onChange={(e) => handleDispatch(e)}
          value={state.town}
        />
        <input
          id='district'
          type='text'
          placeholder='District'
          className='p-1 rounded-md outline-none py-2'
          onChange={(e) => handleDispatch(e)}
          value={state.district}
        />
        <input
          id='country'
          type='text'
          placeholder='Country'
          className='p-1 rounded-md outline-none py-2'
          onChange={(e) => handleDispatch(e)}
          value={state.country}
        />
      </div>
      <div className='w-full mt-3'>
        <div className='flex justify-between pt-1 '>
          <label>Bio:</label>
          <p className={textAreaChar >= 180 && "text-red-600"}>
            {textAreaChar}/190
          </p>
        </div>
        <textarea
          id='bio'
          className='block w-full h-36 sm:h-20 resize-none p-1 rounded-md outline-none'
          maxLength={190}
          onChange={(e) => {
            handleDispatch(e);
            setTextAreaChar(e.target.value.length);
          }}
          value={state.bio}
        ></textarea>
      </div>
      <button
        disabled={!validInp}
        className={`self-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-24 ${
          !validInp ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={hadleClick}
      >
        Done
      </button>
    </form>
  );
};

export default ProfileInputCard;
