import React from 'react';
import ReactDOM from 'react-dom';
import SimpleMap from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleMap />, div);
});
