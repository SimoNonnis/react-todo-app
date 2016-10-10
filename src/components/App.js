import React from 'react';
import CSSModules from 'react-css-modules';

import TodoList from './TodoList';

import styles from './App.css';

const dummyList = [
  { id: 0, isDone: true,  text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' }
];

const App = () => (
  <div styleName='container'>
      <TodoList todosList={dummyList} />
  </div>
);



export default CSSModules(App, styles, {allowMultiple: true});
