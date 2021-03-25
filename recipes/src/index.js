import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import store from './reducers/store';

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (f
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
