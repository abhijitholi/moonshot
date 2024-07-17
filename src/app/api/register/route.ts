import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
// Otp 
import EmailTemplate  from '@/app/api/resend/email-template';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(request:NextRequest){


  // OTP function
  function generateAlphanumericOTP(length: number): string {
    let otp = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for (let i = 0; i < length; i++) {
        otp += characters[Math.floor(Math.random() * characters.length)];
    }
    
    return otp;
}
const OTP = generateAlphanumericOTP(6);
  try{
    const reqBody =await request.json()
    const {username,email,password} = reqBody;
    try {
      const { data, error } = await resend.emails.send({
        from: 'Moonshot e-commerce <moonshot@resend.dev>',
        to: ['jitholi83@gmail.com'],
        subject: 'Moonshot e-commerce Email Verifaction Code', 
        react: EmailTemplate({ userName:`${username}`, otp:OTP }),
      });
  
      if (error) { 
        return Response.json({ error }, { status: 500 });
      }
  
      return Response.json(data);
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
    
    await sql`
    INSERT INTO users (username, email, password)
    VALUES (${username}, ${email}, ${password} ${OTP})
    `;
    
    // otp Start **********************************
  
  
  return NextResponse.json({message:`User registered successfully`},
  {status:200}
  )
 }catch(error:any){
  return NextResponse.json({error:error.message},
    {status:500}
  )
 }
} 
