import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/index.scss';
import Home from './views/home';

export default (
    <Router>
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
    </Router>
);