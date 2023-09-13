import { NextResponse } from 'next/server';
import db from '@/Utils/db';
export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({});
  return NextResponse.json({ todos: todos });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  if (data.content === undefined) {
    throw new Error('Content is undefined');
  } else if (data.content === '') {
    throw new Error('Content is empty');
  }
  const todo = await db.todo.create({
    data: {
      content: data.content,
    },
  });
  return NextResponse.json({ message: 'New todo was created' });
};

export const PUT = async (request: Request) => {
  const data = await request.json();
  if (data.id === undefined) {
    throw new Error('ID is undefined');
  }
  const todo = await db.todo.update({
    where: { id: data.id },
    data: { completed: true },
  });
  return NextResponse.json({ message: 'Todo was completed' });
};
