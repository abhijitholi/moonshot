"use client";

import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import axios from 'axios';

const VerifyEmail: React.FC<{ params: { username: string } }> = ({ params }) => {
  const [otp, setOtp] = useState('');
  const [saveOtp, setSaveOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [email, setEmail] = useState('');

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
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`/api/verify/${params.username}`, { otp });

      if (response.status === 200) {
        setSuccess('Email verified successfully!');
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setError('Failed to verify email. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
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
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? 'VERIFYING...' : 'VERIFY'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
