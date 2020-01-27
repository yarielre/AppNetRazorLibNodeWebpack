import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './react-notes/App';

if (module.hot) {
  module.hot.accept();
}  

ReactDOM.render(
  <App />,
  document.getElementById('react-notes-app')
);