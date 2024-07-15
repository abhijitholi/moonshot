import { NextResponse } from 'next/server';

export async function GET(request : Request) {
  return NextResponse.json({ items: [{ id:1, name: 'kajal' },{ id:2, name: 'Abhishek' },{ id:3, name: 'Anshu' }] });
} 