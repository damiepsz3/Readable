/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NavDrawer from 'containers/NavDrawer/Loadable';
import AppBar from 'containers/AppBar';
import NotFoundPage from 'containers/NotFoundPage/Loadable';



export default function App() {
  return (
    <div>
      <AppBar />
      <NavDrawer/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}
