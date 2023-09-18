import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/test.js';
import Greeting from './components/Greetings.js'

function App() {
  return (
  <>
  <Test />
  <Greeting />
  <h1>Hello World!</h1>
  </>
  );
}

ReactDOM.render(
    <App/>,
  document.getElementById('root'),
  
);