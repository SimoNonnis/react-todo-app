import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Todo.css';

const Todo = ({isDone, text}) => {
  const notDone = <li>{text}</li>;
  const done = <strike>{text}</strike>;

  return (
    <div styleName='container'>
      {isDone ? done : notDone}
    </div>
  )
}

Todo.propTypes = {
  isDone: PropTypes.bool,
  text: PropTypes.string
}

export default CSSModules(Todo, styles, {allowMultiple: true});
