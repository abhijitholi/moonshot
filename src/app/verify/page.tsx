"use client";

import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
const VerifyEmail: React.FC = () => {
  const [otp, setOtp] = useState('');

  
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(otp);
};
  
  return (
    <div className="flex flex-col rounded-lg items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Verify your email</h1>
        <p className="mb-6 text-center">Enter the 8 digit code you have received on swa***@gmail.com</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-2">

<OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={8}
      renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
      renderInput={(props) => <input {...props}
      className="w-10 h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
       style={{ width: 35 }}
      />
    
    }
    />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            VERIFY
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
