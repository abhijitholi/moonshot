import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest, { params }: { params: { username: string } }) {
  try {
    const  login  = await request.json();
    console.log(login)
    await sql`
      UPDATE users 
      SET login = false
      WHERE username = ${params.username}
    `;

    return NextResponse.json({ message: 'Email verified successfully'});
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


