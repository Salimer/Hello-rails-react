// app/javascript/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './Greetings'; // You'll create this component

function AppRoute() {
  return (
    <>
    <div>hello</div>
    <Router>
        hello

        {/* Route for displaying greetings */}
        <Route path="/greetings" component={Greeting} />
    </Router>
    </>
  );
}

export default AppRoute;
