import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';
import Detail from './components/MealDetails';

const routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/character/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default routes;
