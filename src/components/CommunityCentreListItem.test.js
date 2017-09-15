import React from 'react';
import ReactDOM from 'react-dom';
import CommunityCentreListItem from './CommunityCentreListItem';

it('renders without crashing', () => {
  const items = [];
  const div = document.createElement('div');
  ReactDOM.render(<CommunityCentreListItem items={items}/>, div);
});
