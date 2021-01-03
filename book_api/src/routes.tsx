import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import App from "./App";
import { Temporary } from "./Temporary";

export const Path = {
    app: '/',
    temporary: '/Temporary',
};

const routes = (
    <Switch>
        <Route exact path={Path.app} component={App} />
        <Route exact path={Path.temporary} component={Temporary} />
        <Redirect to={Path.app} />
    </Switch>
);

export default routes;