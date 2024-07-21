"use client";

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Products from './product/products';
import Interstmaking from './product/interstmaking';

interface EmailProps {
  params: {
    username: string;
  };
}

interface ProductsProps {
  params: {
    username: string;
  };
}

interface ApiResponse {
  login: string | null;
}

const Email: React.FC<EmailProps> = ({ params: { username } }) => {
  const router = useRouter();
  const [login, setLogin] = useState<string | null>(null);
  const [interst, setInterst] = useState<any>(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get<ApiResponse[]>(`/api/auth/username/${username}`);
        if (response.status === 200) {
          const data = response.data;
          const loginValue = data[0]?.login;
          setLogin(loginValue);

          if (!loginValue) {
            router.push(`/login`);
          } 
        }
      } catch (error) {
        console.log('API call failed:', error);
      }
    };

    fetchUsername();
  }, [username, router]);

  const handleLogout = async () => {
    try {
      const response = await axios.post(`/api/auth/${username}`, { email: username });
      if (response.status === 200) {
        router.push('/login');
      }
    } catch (error) {
      console.log('Logout failed:', error);
    }
  };

  const interstmaking = async () => {
    try {
      const response = await axios.get(`/api/interstmaking/${username}`);
      if (response.status === 200) {
        setInterst(response.data); 
      }
    } catch (error) {
      console.log('API call failed:', error);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center p-4">Welcome {username}</h1>
      <button
        type="button"
        onClick={handleLogout}
        className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-300 dark:focus:ring-red-900"
      >
        Logout
      </button>

      <button
        type="button"
        onClick={interstmaking}
        className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-300 dark:focus:ring-red-900"
      >
        Products
      </button>

      {login && !interst && <Interstmaking params={{ username: username }} />}
      {login && interst && <Products />}
    </>
  );
};

export default Email;
