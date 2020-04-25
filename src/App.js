import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './atomic/pages/Home';
import UserDetail from './atomic/pages/UserDetail';

function App() {
  return (
    <Router>
      <div className="container mx-auto max-w-screen-sm mt-4">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/detail/:username" component={UserDetail} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
