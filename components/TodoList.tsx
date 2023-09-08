import Todo from './Todo';
const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, idx: number) => {
        return <Todo key={idx} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
