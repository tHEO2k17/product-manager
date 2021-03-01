import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './presentation/views/App';
import store from './core/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './core/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
