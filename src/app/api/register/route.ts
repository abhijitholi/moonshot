import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

// export default async function handler(request, response) {
//   if (request.method !== 'GET') {
//     return request.status(405).json({ message: 'Method not allowed' });
//   }

//   const { username, email, password } = request.body;

//   // Hash the password before saving to the database
//   //const hashedPassword = await hash(password, 10);

//   try {
//     // Insert user data into the database
//     await sql`
//       INSERT INTO users (username, email, password)
//       VALUES (${username}, ${email}, ${password})
//     `;

//     console.log('User registered:', { username, email, password });

//     return request.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     return request.status(500).json({ message: 'Internal server error' });
//   }
// }

export async function POST(request:NextRequest){
 try{
  const reqBody =await request.json()
  const {username,email,password} = reqBody;

  // Hash the password before saving to the database
  //const hashedPassword = await hash(password, 10);
  // Insert user data into the database
  await sql`
    INSERT INTO users (username, email, password)
    VALUES (${username}, ${email}, ${password})
  `;
  return NextResponse.json({message:'User registered successfully'},
  {status:200}
  )
 }catch(error:any){
  return NextResponse.json({error:error.message},
    {status:500}
  )
 }
} 
