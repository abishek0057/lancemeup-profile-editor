import React, { useReducer, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileInputCard from "./components/ProfileInputCard";
import { initialState, reducer } from "./helper/formReducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editMode, setEditMode] = useState(false);
  return (
    <div className='flex justify-around h-screen items-center bg-gradient-to-r from-green-200 via-green-300 to-blue-500'>
      {editMode && (
        <ProfileInputCard
          state={state}
          dispatch={dispatch}
          setEditMode={setEditMode}
        />
      )}
      <ProfileCard state={state} setEditMode={setEditMode} />
    </div>
  );
};

export default App;

