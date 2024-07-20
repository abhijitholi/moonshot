"use client";

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Products from './product/products';

interface EmailProps {
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

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get<ApiResponse[]>(`/api/auth/username/${username}`);
        if (response.status === 200) {
          const data = response.data;
          const loginValue = data[0]?.login;
          console.log(loginValue);
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

  return (
    <>
      <h1>Email {username}</h1>
      {login && <Products />}
    </>
  );
};

export default Email;
