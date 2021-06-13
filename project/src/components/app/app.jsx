import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import NotFound from '../not-found/not-found';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import OfferProp from '../offer/offer.prop';

function App(props) {
  const {apartments} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main apartments={apartments}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <Offer />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  apartments: PropTypes.arrayOf(
    PropTypes.oneOfType([OfferProp]).isRequired,
  ),
};

export default App;
