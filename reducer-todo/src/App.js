import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer'

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
