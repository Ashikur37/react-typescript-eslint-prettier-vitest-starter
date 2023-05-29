export enum Status {
  PENDING = 'Pending',
  COMPLETED = 'Completed',
}
export enum TodoActionType {
  ADD,
  UPDATE,
  REMOVE,
}

export interface Todo {
  id: number;
  title: string;
  status: Status;
}
export interface TodoState {
  toDos: Todo[];
}
export interface TodoAction {
  type: TodoActionType;
  payload: Todo;
}
