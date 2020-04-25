import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Home from './atomic/pages/Home';
import UserDetailContainer from './containers/UserDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container mx-auto max-w-screen-sm mt-4">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/detail/:username" component={UserDetailContainer} exact />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
