import React from 'react';
import { Routes,Route,Router  } from 'react-router-dom';
import Results from './Results';

const Routes = () => {
  return (
    <div p-4>
      <Router>
        <Routes path='/'>
        <Route exact path="/search">
        <Results />
      </Route>
      <Route path="/images">
        <Results />
      </Route>
      <Route path="/news">
        <Results />
      </Route>
      <Route path="/videos">
        <Results />
      </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default Routes;
