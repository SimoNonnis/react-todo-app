import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Todo.css';

const Todo = ({isDone, text, handleClick, id}) => {
  const notDone = <li id={id}>{text}</li>;
  const done = <strike id={id}>{text}</strike>;

  return (
    <div styleName='container' onClick={handleClick}>
      {isDone ? done : notDone}
    </div>
  )
}

Todo.propTypes = {
  isDone: PropTypes.bool,
  text: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string
}

export default CSSModules(Todo, styles, {allowMultiple: true});
