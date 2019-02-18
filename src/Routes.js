import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App.js';
import Home from './Home.js';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


const Routes = () =>
    <App>
        <Switch>
            <Route exact path={"/Home.js"} component={Home} />
            <Route exact path={"/"} component={Home} />
        </Switch>
    </App>;

export default Routes;