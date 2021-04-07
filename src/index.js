import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import { createBrowserHistory } from "history";
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import reducer from "./reducer";

const store = createStore(
    reducer
);
const createHistory = createBrowserHistory();
const history = createHistory

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router history={history}>
              {/*<Route path="/" component = {App} exact={true}/>*/}
              <App/>
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
