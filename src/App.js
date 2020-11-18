import React from 'react';
import { get } from './Registry';
import './App.css';

function App() {
  const blueComponent = get('BlueComponent');
  const greenComponent = get('GreenComponent');
  return (
    <div className="App-content">
      {React.createElement(blueComponent)}
      {React.createElement(greenComponent)}
    </div>
  );
}

export default App;
