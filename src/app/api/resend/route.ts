import EmailTemplate  from '@/app/api/resend/email-template';
import { Resend } from 'resend';
import { sql } from '@vercel/postgres';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST() {
  function generateAlphanumericOTP(length: number): string {
    let otp = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for (let i = 0; i < length; i++) {
        otp += characters[Math.floor(Math.random() * characters.length)];
    }
    
    return otp;
}
const OTP = generateAlphanumericOTP(6);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Moonshot e-commerce <moonshot@resend.dev>',
      to: ['jitholi83@gmail.com'],
      subject: 'Moonshot e-commerce Email Verifaction Code', 
      react: EmailTemplate({ userName:"Abhishek", otp:OTP }),
    });

    if (error) { 
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
