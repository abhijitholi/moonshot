  import { sql } from "@vercel/postgres";
  import { NextRequest, NextResponse } from "next/server";

  export async function GET(request: NextRequest, { params }: { params: { username: string } }) {
      //console.log(params.email)
      try {
        const { rows } = await sql`
          SELECT * FROM user_interests
          WHERE username = ${params.username}
        `;
        
        return NextResponse.json(rows);
      } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }