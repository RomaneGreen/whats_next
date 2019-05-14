import React from 'react';
import './index.css';
import Main from './components/main'


function App() {
  
  return (
    <div className="App">
      <h1>What to do ? </h1>

      < Main />
      <input type="text"></input>
      <button>Add task</button>
    </div>
  );
}

export default App;
