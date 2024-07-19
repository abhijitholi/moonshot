import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Fetch the user by email
    const { rows } = await sql`
      SELECT * FROM users
      WHERE email = ${email}
    `;

    // If user not found, return error
    if (rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update the login status to false after successful logout
    await sql`
      UPDATE users
      SET login = ${false}
      WHERE email = ${email}
    `;

    // Return success response
    return NextResponse.json({ message: "Logout successful" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
