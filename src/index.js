import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './components/ToDoContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
