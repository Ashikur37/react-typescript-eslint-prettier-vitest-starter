import { useReducer, useState } from 'react';
import { TodoActionType, Status, Todo } from '../types/todo';
import { initialState, reducer } from '../reucers/TodoReducer';

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState<string>('');
  const addNew = () => {
    dispatch({
      type: TodoActionType.ADD,
      payload: {
        id: state.toDos.length + 1,
        title: name,
        status: Status.PENDING,
      },
    });
  };
  const removeItem = (todo: Todo): void => {
    dispatch({
      type: TodoActionType.REMOVE,
      payload: todo,
    });
  };
  return (
    <div>
      Todo List
      <input onChange={(e) => setName(e.target.value)} />
      <button type="button" onClick={addNew}>
        Add New
      </button>
      {state.toDos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button
            onClick={() => removeItem(todo)}
            className="btn text-red"
            type="button"
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
}

export default UseReducer;
