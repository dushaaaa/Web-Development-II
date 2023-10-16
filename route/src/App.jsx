import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import Settings from './components/Settings.jsx';

function App() {
  return (
    <Router>
      <div>
        <header>
          {/* Your header content */}
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            {/* Add more routes as needed */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
