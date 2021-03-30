import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './containers/App';
import Detail from './components/MealDetails';
import Meals from './containers/Meals';

const routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/meal/:id" component={Detail} />
        <Route exact path="/meals/:name" component={Meals} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default routes;
