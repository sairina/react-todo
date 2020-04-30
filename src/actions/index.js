export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST'; //makes app load todolist from external server
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST'; //renders todo list it just loaded

//app handles action ADD_TODO
//toDoItem = object with 2 properties, id and title
export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime(),
      title,
    },
  };
}

//defines function to create action with LOAD_TODO_LIST type
export function loadToDoList() {
  return {
    type: LOAD_TODO_LIST,
  };
}
