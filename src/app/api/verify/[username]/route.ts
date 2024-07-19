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
    const  verifiction  = await request.json();
    const isVerified = verifiction.verifiction === true;
    await sql`
      UPDATE users 
      SET verifiction = ${isVerified}
      WHERE username = ${params.username}
    `;

    return NextResponse.json({ message: 'Email verified successfully'});
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


