import './App.css';
import './index.js';
import React from 'react';
import ErroR from './Error';
import Home from './home';
import {Switch, Route } from "react-router-dom";
import Social from './social';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/error" component={ErroR}></Route>
                <Route exact path="/social" component={Social}></Route>

            </Switch>
        </div>
    )

}

export default App;
