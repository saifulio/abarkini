import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RestrictRoute from './RestrictRoute';
import MainLayout from '../components/common/layout/MainLayout';
import ProductsLayout from '../components/common/layout/ProductsLayout';
import ProductDetailsLayout from '../components/common/layout/ProductDetailsLayout';
import NotFound from '../components/error/NotFound';

const AsyncLandingPage = loadable(() => import('../containers/home/LandingContainer'));
const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));
const AsyncSignUpForm = loadable(() => import('../containers/auth/SignUpContainer'));
const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));
const AsyncProducts = loadable(() => import('../containers/products/ProductsContainer'));
const AsyncCheckout = loadable(() => import('../containers/checkout/CheckoutContainer'));
const AsyncContactUs = loadable(() => import('../containers/contact/ContactUsContainer'));
const AsyncCart = loadable(() => import('../containers/cart/CartContainer'));
const AsyncProductDetails = loadable(() =>
  import('../containers/products/ProductDetailsContainer')
);

const Router = () => (
  <Fragment>
    <Switch>
      <RestrictRoute exact path="/" component={AsyncLandingPage} />
      <RestrictRoute exact path="/login" component={AsyncLoginForm} />
      <RestrictRoute exact path="/signup" component={AsyncSignUpForm} />
      <RestrictRoute exact path="/products" layout={ProductsLayout} component={AsyncProducts} />
      <RestrictRoute exact path="/cart" layout={MainLayout} component={AsyncCart} />
      <RestrictRoute exact path="/checkout" layout={MainLayout} component={AsyncCheckout} />
      <RestrictRoute exact path="/contact" layout={MainLayout} component={AsyncContactUs} />
      <RestrictRoute
        exact
        path="/products/:id"
        layout={ProductsLayout}
        component={AsyncProductDetails}
      />
      <PrivateRoute exact path="/dashboard" layout={MainLayout} component={AsyncDashboard} />

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
