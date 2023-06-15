import React from "react";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className='flex justify-center h-screen items-center bg-gradient-to-r from-green-200 via-green-300 to-blue-500'>
      <ProfileCard />
    </div>
  );
};

export default App;

