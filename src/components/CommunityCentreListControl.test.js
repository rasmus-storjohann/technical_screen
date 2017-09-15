import React from 'react';
import ReactDOM from 'react-dom';
import CommunityCentreListControl from './CommunityCentreListControl';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommunityCentreListControl />, div);
});
