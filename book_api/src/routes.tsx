import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'

import App from 'App';
import { temporary } from "./temporary";

export const Path ={
    app: '/',
    temporary: '/temporary',
};

const routes = {
    <Switch>
     <Route exact path ={Path.app} component={App}/>
     <Route exact path ={Path.temporary} component={temporary}/>
     <Redirect to ={Path.app}/>
    </Switch>
};

export default routes;