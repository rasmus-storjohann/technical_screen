import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createModel from './createModel';
import './index.css';

ReactDOM.render(
  <App age={25} model={createModel(url)} />,
  document.getElementById('root')
);
