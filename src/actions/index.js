export const ADD_TODO = 'ADD_TODO';

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
