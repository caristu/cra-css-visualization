import React from 'react';
import {get} from './Registry';

function App() {
  const componentToRenderB = get('MyComponentB');
  return <div>{React.createElement(componentToRenderB)}</div>
} 

export default App;
