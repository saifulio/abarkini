import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PrivateRoute from './PrivateRoute';
import RestrictRoute from './RestrictRoute';
import MainLayout from '../components/common/layout/MainLayout';
import ProductsLayout from '../components/common/layout/ProductsLayout';
import NotFound from '../components/error/NotFound';

const AsyncLandingPage = loadable(() => import('../containers/home/LandingContainer'));
const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));
const AsyncSignUpForm = loadable(() => import('../containers/auth/SignUpContainer'));
const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));
const AsyncProducts = loadable(() => import('../containers/products/ProductsContainer'));

const Router = () => (
  <Fragment>
    <Switch>
      <RestrictRoute exact path="/" component={AsyncLandingPage} />
      <RestrictRoute exact path="/login" component={AsyncLoginForm} />
      <RestrictRoute exact path="/signup" component={AsyncSignUpForm} />
      <PrivateRoute exact path="/dashboard" layout={MainLayout} component={AsyncDashboard} />
      <PrivateRoute exact path="/products" layout={ProductsLayout} component={AsyncProducts} />

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
