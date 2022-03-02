import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Switch } from "react-router-dom";

import ErroR from "./Error.js";

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
);

reportWebVitals();

<Switch>
  <Route exact path="/" component={ErroR} />
</Switch>