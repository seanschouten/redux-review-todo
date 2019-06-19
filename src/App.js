import React, {Component} from 'react';
// Import our store into the component 
import store from './redux/store'
// Import our action types
import {ADD_TODO} from './redux/todoReducer'


class App extends Component{
constructor(){
  super();

  // Create initial local state that will be set to the redux store
  this.state = {
    redux: store.getState(),
    newState: ''
  }
};

// When the component first mounts, we are subscribing to the redux store and will watch for any changes made to the global state
// When there is a change made to the global state, we will update our local state
componentDidMount(){
  store.subscribe(() => {
    this.setState({
      redux: store.getState()
    })
  });
}

  // Keep track of the values put into the input box
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    // Map through the todos from redux and display them to the browser
    const mappedReduxTodo = this.state.redux.todo.map((todo, index) => {
      return (
    <div key={index}>
      <h1>{todo}</h1>

    </div>
    )});
    
    return(
      <div>
        {mappedReduxTodo}
        <div>
          <input type='text' name='newTodo' onChange={this.handleInputChange} />
          <button onClick={() => store.dispatch({type: ADD_TODO, payload: this.state.newTodo})}>Add Todo</button>
        </div>
      </div>
    );
  }
}

export default App;
