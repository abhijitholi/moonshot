import { sql } from '@vercel/postgres';

async function createUsersTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
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
