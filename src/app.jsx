import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from './components/Loading';
import './styles/index.scss';

function lazy(path) {
    return React.lazy(() => import(`./views/${path}`));
}

export default (
    <React.Suspense fallback={<Loading />}>
        <Router>
            <Switch>
                <Route path="/" component={lazy('Home')} exact />
            </Switch>
        </Router>
    </React.Suspense>
);