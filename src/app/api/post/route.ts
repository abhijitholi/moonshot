import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ items: [{ id:1, name: 'kajal' },{ id:2, name: 'Abhishek' }] });
} 