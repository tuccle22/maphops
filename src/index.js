import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Head.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Head />,
  document.getElementById('root')
);
registerServiceWorker();
