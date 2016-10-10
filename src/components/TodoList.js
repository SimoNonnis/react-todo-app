import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import Todo from './Todo';

import styles from './TodoList.css';

const TodoList = ({todosList}) => (
  <div styleName='container'>
    <h1 styleName='title'>Today's To Do List</h1>
    <form styleName='form' onSubmit=''>
      <input type='text' placeholder='add ToDo'/>
      <button styleName='addToDo' type='submit'>Add</button>
    </form>
    <ul styleName='list'>
      {todosList.map(t => <Todo key={t.id} isDone={t.isDone} text={t.text}/>)}
    </ul>
  </div>
)

TodoList.propTypes = {
  todosList: PropTypes.array
}

export default CSSModules(TodoList, styles, {allowMultiple: true});
