import { newTodo } from '@/Utils/actions';

const NewTodoForm = ({}) => {
  return (
    <div>
      <form action={newTodo}>
        <input
          placeholder="Todo content"
          type="text"
          name="content"
          className="border outline-none px-3 py-1 rounded"
        />
        <button type="submit" className="ml-2 px-3 py-1 border">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
