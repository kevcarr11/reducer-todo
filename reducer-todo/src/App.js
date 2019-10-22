import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App-header">
      <h1>My Reducer Todo List</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
