import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
// Otp
import EmailTemplate from "@/app/api/resend/email-template";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // OTP function
  function generateAlphanumericOTP(length: number): string {
    let otp = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      otp += characters[Math.floor(Math.random() * characters.length)];
    }

    return otp;
  }
  const OTP = generateAlphanumericOTP(8);
  
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Insert user details and OTP into the database
    await sql`
      INSERT INTO users (username, email, password, otp)
      VALUES (${username}, ${email}, ${hashedPassword}, ${OTP})
    `;

    // Send the OTP email
    try {
      const { data, error } = await resend.emails.send({
        from: "Moonshot e-commerce <moonshot@resend.dev>",
        to: [`${email}`],
        subject: "Moonshot e-commerce Email Verification Code",
        text: "", // Add this line
        react: EmailTemplate({ username: `${username}`, otp: OTP }),
      });

      if (error) {
        return NextResponse.json({ error }, { status: 500 });
      }

      return NextResponse.json(data);
    } catch (error:any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: `User registered successfully` },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
