import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../state/store';
import { routes } from '../routes';
import Main from './Main';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact component={Main} path={routes.root}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Root;