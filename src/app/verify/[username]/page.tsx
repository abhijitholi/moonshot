"use client";

import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const VerifyEmail: React.FC<{ params: { username: string } }> = ({ params }) => {
  const [otp, setOtp] = useState('');
  const [saveOtp, setSaveOtp] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
 
  const router = useRouter();
 const verifiction = otp === saveOtp;
 console.log(saveOtp === otp);

  
  useEffect(() => {
    const fetchOtpAndEmail = async () => {
     
      try {
        const response = await axios.get(`/api/verify/${params.username}`);
        const data = response.data;
        setEmail(data[0].email);
        setSaveOtp(data[0].otp);
        
      } catch (error) {
        
        console.error(error);
      }
    };

    fetchOtpAndEmail();
  }, [params.username]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/verify/${params.username}`, { verifiction });
      if(verifiction){
        setTimeout(() => {
            router.push(`/login`);
          }, 1000);
      }
      setShowSuccess (verifiction);  
      setShowError( !verifiction);
    } catch (error) {
      console.error(error);
    } 
  };
  
  return (
    <div className="flex flex-col rounded-lg items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Verify your email</h1>
        <p className="mb-6 text-center">Enter the 8 digit code you have received on {email}</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-2">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={8}
              renderSeparator={<span>&nbsp;&nbsp;</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ width: 35 }}
                />
              )}
            />
          </div>
          {showSuccess && (
        <div className="fixed top-4 right-4 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">Your Otp is verified</span>
        </div>
      )}
      {showError && (
        <div className="fixed top-4 right-4 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">!Your Otp is not verified please check your otp</span>
        </div>
      )}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          
          >
            Veryfy Otp
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
