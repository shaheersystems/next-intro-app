'use client';
import { useTransition } from 'react';
import { completeTodo } from '@/Utils/actions';
const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`border px-2 py-1 cursor-pointer ${
        todo.completed ? 'line-through text-gray-600' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
