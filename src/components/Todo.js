import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Todo.css';

const Todo = ({isDone, text, handleClick, handleDelete, id}) => {
  const notDone = <li id={id} onClick={handleClick} >{text}</li>;
  const done = (
    <span>
      <strike
        styleName='completedToDo'
        onClick={handleClick}
        id={id}>
          {text}
      </strike>
      <span styleName='deleteToDo' id={id} onClick={handleDelete}>Delete</span>
    </span>);

  return (
    <div styleName='container'>
      {isDone ? done : notDone}
    </div>
  )
}

Todo.propTypes = {
  isDone: PropTypes.bool,
  text: PropTypes.string,
  handleClick: PropTypes.func,
  handleDelete: PropTypes.func,
  id: PropTypes.string
}

export default CSSModules(Todo, styles, {allowMultiple: true});
