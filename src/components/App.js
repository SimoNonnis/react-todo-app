import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import TodoList from './TodoList';

import styles from './App.css';

class App extends Component {
  constructor () {
    super();
    this.addToDo = this.addToDo.bind(this);
    this.state = {
      data: [
        { id: 0, isDone: true,  text: 'make components' },
        { id: 1, isDone: false, text: 'design actions' },
        { id: 2, isDone: false, text: 'implement reducer' },
        { id: 3, isDone: false, text: 'connect components' }
      ]
    }
  }

  addToDo (todo) {
    this.setState({
      data: this.state.data.concat(todo)
    })
  }

  render () {
    return (
      <div styleName='container'>
          <TodoList todosList={this.state.data} addToDo={this.addToDo}/>
      </div>
    )
  }

}


export default CSSModules(App, styles, {allowMultiple: true});
