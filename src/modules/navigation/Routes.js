import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainHeader from '../../common/components/MainHeader';
import Home from '../home/Home';
import HotelsList from '../hotelslist/HotelsList';
const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/hotels" component={MainHeader} />
    </Switch>
  );
};
export default Routes;
