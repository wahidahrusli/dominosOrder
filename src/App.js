import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from './component/Navbar'
import Pizza from './component/Pizza'
import NSide from './component/NSide'
import NBeverage from './component/NBeverage'
import Cart from './component/Cart'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Pizza} />
            <Route path='/side' component={NSide} />
            <Route path='/beverage' component={NBeverage} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
