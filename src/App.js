import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { initialState, reducer } from './reducer.js'
import Counter from './Counter';
const store = createStore(reducer, initialState)
function App() {
  const [foo, setFoo] = useState(false);
  return (<Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setFoo(true)} >Use Foo</button>
        {foo ? <Counter /> : <Counter foo="baz" />}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </Provider>
  );
}

export default App;
