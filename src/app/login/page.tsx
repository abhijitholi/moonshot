'use client'
import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowError(false);
    try {
      const response = await axios.post('/api/login', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setShowSuccess(true);

        const fetchUsername = async () => {
          try {
            const response = await axios.get(`/api/auth/email/${form.email}`);  
            if (response.status === 200) {
              const data = response.data;
              const login = data[0].login;
              const username = data[0].username;
               console.log(login)
              if (!login) {
                router.push(`/login`);
              }
              if(login){
                setTimeout(() => {
                  router.push(`/login/${username}`);
                }, 1000);
              }
            }
          } catch (error) {
            console.log('API call failed:', error);
          }
        };
        fetchUsername();
      }
    } catch (error) {
      console.log('Login failed:', error);
      setShowError(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <p className="text-center text-gray-600 mb-4">
          <span className="font-semibold">Welcome back to ECOMMERCE</span>
          <br />
          The next-gen business marketplace
        </p>
        <form onSubmit={handleSubmit}>
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
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 pr-12"
              placeholder="Enter"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-2 text-gray-600"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">Login</button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don’t have an Account? <a href="/" className="text-blue-600 hover:underline">SIGN UP</a>
          </p>
        </div>
      </div>
      {showSuccess && (
        <div className="fixed top-4 right-4 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
          <span className="font-medium">Login successful</span>
        </div>
      )}
      {showError && (
        <div className="fixed top-4 right-4 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">Login failed. Please check your credentials</span>
        </div>
      )}
    </div>
  );
}
