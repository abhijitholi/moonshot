import { hash } from 'bcrypt';  

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, email, password } = req.body;

  // Add your logic to store user data, e.g., save to a database
  const hashedPassword = await hash(password, 10);

  // Mock response
  // You would typically store the user data in your database here
  console.log('User registered:', { username, email, hashedPassword });

  return res.status(201).json({ message: 'User registered successfully' });
}
