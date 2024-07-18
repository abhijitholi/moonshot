import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { username: string } }) {
  try {
    const { rows } = await sql`
      SELECT email, otp FROM users
      WHERE username = ${params.username}
    `;
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest, { params }: { params: { username: string } }) {
  try {
    const  otp  = await request.json();

    // Fetch saved OTP from the database
    const { rows } = await sql`
      SELECT otp FROM users
      WHERE username = ${params.username}
    `;
    console.log(rows)
    if (rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const savedOtp = rows[0].otp;
    const isMatch = otp === savedOtp;
    
   
    // Update the user's verification status
    await sql`
      UPDATE users 
      SET verification = ${isMatch}
      WHERE username = ${params.username}
    `;

    return NextResponse.json({ message: 'Email verified successfully' });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
