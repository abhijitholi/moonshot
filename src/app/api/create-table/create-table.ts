import { sql } from '@vercel/postgres';

 export default async function createUsersTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users ( 
        id SERIAL,
        username VARCHAR(255) PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        otp VARCHAR(255) NOT NULL,
        verifiction BOOLEAN,
        login BOOLEAN , 
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating users table:', error);
  }
}

// Call the function to create the table
createUsersTable();
