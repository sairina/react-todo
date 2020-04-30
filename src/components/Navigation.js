import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <>
    <Link className="btn btn-primary" to="/">
      To-Do List
    </Link>
    <Link className="btn btn-secondary" to="/new-item">
      + Add New
    </Link>
  </>
);
