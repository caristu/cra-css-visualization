import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


async function resolveContexts() {
  const ctxs = await import(`./init.js`);

  const contexts = ctxs.default;
  for (const ctx of contexts) {
    for (const ctxFile of ctx.keys()) {
      const reg = await ctx(ctxFile);
      reg.doRegister();
    }
  }
}

resolveContexts().then(() => ReactDOM.render(<App />, document.getElementById('root')));