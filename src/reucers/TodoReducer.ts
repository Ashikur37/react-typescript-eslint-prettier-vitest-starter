import { TodoAction, TodoActionType, TodoState } from '../types/todo';

export const reducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionType.ADD:
      return {
        ...state,
        toDos: [
          ...state.toDos,
          {
            id: action.payload.id,
            title: action.payload.title,
            status: action.payload.status,
          },
        ],
      };
    case TodoActionType.REMOVE:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export const initialState: TodoState = {
  toDos: [],
};
