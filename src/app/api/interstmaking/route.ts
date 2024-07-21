import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import user_interests from "../create-table/user_interests";
user_interests()
interface UserInterests {
  username: string;
  computers: boolean;
  kids: boolean;
  toys: boolean;
  clothing: boolean;
  outdoors: boolean;
  shoes: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const reqBody: UserInterests = await request.json();
    const { username, computers, kids, toys, clothing, outdoors, shoes } = reqBody;
    
    await sql`
      INSERT INTO user_interests (username, computers, kids, toys, clothing, outdoors, shoes)
      VALUES (${username}, ${computers}, ${kids}, ${toys}, ${clothing}, ${outdoors}, ${shoes})
      ON CONFLICT (username)
      DO UPDATE SET
        computers = EXCLUDED.computers,
        kids = EXCLUDED.kids,
        toys = EXCLUDED.toys,
        clothing = EXCLUDED.clothing,
        outdoors = EXCLUDED.outdoors,
        shoes = EXCLUDED.shoes;
    `;

    return NextResponse.json(
      { message: `User interests added or updated successfully` },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error inserting or updating user interests:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
