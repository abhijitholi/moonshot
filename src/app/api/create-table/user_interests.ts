import { sql } from '@vercel/postgres';

 export default async function user_interests() {
  try {

     await sql`CREATE TABLE IF NOT EXISTS  user_interests (
    username VARCHAR(255) PRIMARY KEY,
    computers BOOLEAN,
    kids BOOLEAN,
    toys BOOLEAN,
    clothing BOOLEAN,
    outdoors BOOLEAN,
    shoes BOOLEAN);`

  
  
    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating users table:', error);
  }
}

// Call the function to create the table
user_interests();
