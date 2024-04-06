import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <HashLoader
        color="#6366f1"
        size={75}
      />  
    </div>
  );
};

export default LoadingSpinner;
