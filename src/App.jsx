import React, { useReducer, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileInputCard from "./components/ProfileInputCard";
import { initialState, reducer } from "./helper/formReducer";

const App = () => {
  const userData = localStorage.getItem("userData");
  const parsedData = userData ? JSON.parse(userData) : initialState;
  const [state, dispatch] = useReducer(reducer, parsedData);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(state));
  }, [state]);

  const [editMode, setEditMode] = useState(false);
  return (
    <div className='flex flex-col-reverse sm:flex-row justify-around h-screen items-center bg-gradient-to-r from-green-200 via-green-300 to-blue-500'>
      {editMode && (
        <ProfileInputCard
          state={state}
          dispatch={dispatch}
          setEditMode={setEditMode}
        />
      )}
      {!editMode && <ProfileCard state={state} setEditMode={setEditMode} />}
    </div>
  );
};

export default App;

