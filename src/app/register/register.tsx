'use client'
import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowError(false);
    try {
      const response = await axios.post('/api/register', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setShowSuccess(true);
        setTimeout(() => {
          router.push(`/verify/${form.username}`);
          
        }, 1000);
        
      }
    } catch (error) {
      // Handle error
      console.log('Registration failed:', error);
      
        setShowError(true);
    
    }
    
  };


  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter"
              required
            />
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">Create Account</button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Have an Account? <a href="/login" className="text-blue-600 hover:underline">LOGIN</a>
          </p>
        </div>
      </div>
      {showSuccess && (
        <div className="fixed top-4 right-4 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">Your Otp Sent Successfully</span>
        </div>
      )}
      {showError && (
        <div className="fixed top-4 right-4 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">! User is not registered please check all fields</span>
        </div>
      )}
    </div>  
  );
}
