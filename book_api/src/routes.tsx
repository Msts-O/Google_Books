import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import App from "./components/App";
import { Layout }  from "./components/Layout";
import { GoogleBooks } from "./components/GoogleBooks";

export const Path = {
    app: '/',
    googleBooks: '/google_books',
};

const routes = (
    <Layout>
    <Switch>
        <Route exact path={Path.app} component={App} />
        <Route exact path={Path.googleBooks} component={GoogleBooks} />
        <Redirect to={Path.app} />
    </Switch>
    </Layout>
);

export default routes;