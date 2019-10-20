import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer'
import TodoList from './components/TodoList'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <TodoList state={state} />
    </div>
  );
}

export default App;
