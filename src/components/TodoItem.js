import React from 'react';
import PropTypes from 'prop-types';

function ToDoItem(props) {
  const {
    checked, title, handleChangeProps, id,
  } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleChangeProps(id)}
      />
      {' '}
      {title}
      {' '}
      <button
        type="button"
      >
        Delete
      </button>
    </li>
  );
}

ToDoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default ToDoItem;
