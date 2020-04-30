import { connect } from 'react-redux';
import ToDoList from '../components/TodoList';

//map state of app to props of todolist component
//redux will map todolist object on its store to the todolist prop
//that todolist component uses
const mapStateToProps = (state) => {
  console.log('ToDoListContainer', {
    toDoList: state.toDoList,
  });
  return {
    toDoList: state.toDoList,
  };
};

const ToDoListContainer = connect(mapStateToProps)(ToDoList);

export default ToDoListContainer;
