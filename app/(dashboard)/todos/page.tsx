import db from '@/Utils/db';
import TodoList from '@/components/TodoList';
const fetchData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  const todos = await fetchData();
  console.log(todos);
  return (
    <div className="py-2 px-4">
      <h1 className="text-xl font-semibold">Todos</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
