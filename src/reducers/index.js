import { ADD_TODO } from '../actions';

//define initial state of app
const initialState = {
  toDoList: [],
};

//define what toDoApp will do when it receives ADD_TODO action
//add new todo item to the toDoList
export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      let newToDoList = [...state.toDoList, { ...action.toDoItem }];
      return { ...state, toDoList: newToDoList };
    default:
      return state;
  }
}
