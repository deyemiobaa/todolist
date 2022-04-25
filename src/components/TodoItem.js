import React from 'react';
import PropTypes from 'prop-types';

function ToDoItem(props) {
  const { checked, title, handleChange } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleChange()}
      />
      {' '}
      {title}
    </li>
  );
}

ToDoItem.propTypes = {
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ToDoItem;
