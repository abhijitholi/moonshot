import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Fetch the user by email
    const { rows } = await sql`
      SELECT * FROM users
      WHERE email = ${email}
    `;

    // If user not found, return error
    if (rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const user = rows[0];

    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Check if the user is verified
    // if (!user.verified) {
    //   return NextResponse.json({ error: "User not verified" }, { status: 403 });
    // }

    // If password is correct and user is verified, return success response
    return NextResponse.json({ message: "Login successful" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
