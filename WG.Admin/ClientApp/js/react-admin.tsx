import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './react-admin/App';

if (module.hot) {
  module.hot.accept();
}  

ReactDOM.render(
  <App />,
  document.getElementById('react-admin-app')
);