import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'styles/App.scss';

import Home from 'components/Home';
import Product from 'components/Product';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
        </Switch>
      </HashRouter>
    );    
  }
}

export default App;