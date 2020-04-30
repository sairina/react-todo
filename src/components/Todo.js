import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

//receives description of todo item from ToDoList and renders item
const ToDo = ({ title }) => <ListGroup.Item>{title}</ListGroup.Item>;

ToDo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ToDo;
