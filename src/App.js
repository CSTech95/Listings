import React, { Component } from 'react';
import './App.css';

import Input from './components/Input';
import List from './components/List';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Todos: ['Homework','Laundry'],
    }
  }

  addItem(x) {
    let TodosCopy = this.state.Todos;
    TodosCopy.push(x);
    this.setState({Todos:TodosCopy});
  }
  
  render() {
    return (
      <div className="App">
        <h1>TODO</h1>
        <Input 
        handleChange={this.addItem.bind(this)}
        />
        {this.state.Todos.map(x => <List list={x}/>)}
      </div>
    );
  }
}

export default App;
