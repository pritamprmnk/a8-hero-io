import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppNotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/allapps');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

      <img 
        src="./assets/App-Error.png" 
        alt="App Not Found" 
        className="max-w-sm mb-8"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
        OPPS!! APP NOT FOUND
      </h1>

      <p className="text-gray-600 text-center mb-6">
        The App you are requesting is not found on our system. Please try another app.
      </p>


      <button 
        onClick={goHome}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
      >
        Go Back!
      </button>
    </div>
  );
};

export default AppNotFound;
