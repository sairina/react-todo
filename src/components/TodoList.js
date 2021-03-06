import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ToDo from './Todo';

//receives toDoList from toDoListContainer, iterates and renders list of ToDo components
const ToDoList = ({ toDoList }) => (
  <Jumbotron>
    <ListGroup>
      {toDoList.map((toDo, index) => {
        return <ToDo key={index} {...toDo} />;
      })}
    </ListGroup>
  </Jumbotron>
);

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ToDoList;
