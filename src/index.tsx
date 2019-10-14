import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import userStore from './app/stores/userStore';
import AppStore from './app/stores/appStore';
import { theme } from './app/utils/theme'

const appStore = new AppStore()

const stores = {
  appStore,
  userStore,
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
