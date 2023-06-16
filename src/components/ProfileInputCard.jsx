import React from "react";

const ProfileInputCard = ({ dispatch, state, setEditMode }) => {
  const hadleClick = (e) => {
    e.preventDefault();
    setEditMode(false);
  };
  return (
    <form className='relative flex flex-col gap-y-4 max-w-3xl border-2 border-blue-200 rounded-lg p-6 py-10 shadow-xl shadow-slate-400 bg-lime-100'>
      <div className='flex gap-x-2'>
        <input
          type='text'
          placeholder='First Name'
          className='p-1 py-2 rounded-md outline-none'
          onChange={(e) =>
            dispatch({ type: "fname", inpValue: e.target.value })
          }
          value={state.firstName}
        />
        <input
          type='text'
          placeholder='Middle Name'
          className='p-1 py-2 rounded-md outline-none'
          onChange={(e) =>
            dispatch({ type: "mname", inpValue: e.target.value })
          }
          value={state.middleName}
        />
        <input
          type='text'
          placeholder='Last Name'
          className='p-1 py-2 rounded-md outline-none'
          onChange={(e) =>
            dispatch({ type: "lname", inpValue: e.target.value })
          }
          value={state.lastName}
        />
      </div>
      <input
        type='text'
        placeholder='Role'
        className='p-1 py-2 rounded-md outline-none max-w-fit'
        onChange={(e) => dispatch({ type: "role", inpValue: e.target.value })}
        value={state.role}
      />
      <div className='flex gap-x-2'>
        <input
          type='text'
          placeholder='Town'
          className='p-1 py-2 rounded-md outline-none'
          onChange={(e) => dispatch({ type: "town", inpValue: e.target.value })}
          value={state.town}
        />
        <input
          type='text'
          placeholder='District'
          className='p-1 rounded-md outline-none'
          onChange={(e) =>
            dispatch({ type: "district", inpValue: e.target.value })
          }
          value={state.district}
        />
        <input
          type='text'
          placeholder='Country'
          className='p-1 rounded-md outline-none'
          onChange={(e) =>
            dispatch({ type: "country", inpValue: e.target.value })
          }
          value={state.country}
        />
      </div>
      <div className='w-full'>
        <label>Bio:</label>
        <textarea
          className='block w-full h-20 resize-none p-1 rounded-md outline-none'
          maxLength={190}
          onChange={(e) => dispatch({ type: "bio", inpValue: e.target.value })}
          value={state.bio}
        ></textarea>
      </div>
      <button
        className='self-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-24'
        onClick={hadleClick}
      >
        Done
      </button>
    </form>
  );
};

export default ProfileInputCard;
