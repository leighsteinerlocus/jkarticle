import React from 'react';
import App from './App'

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => (
 <Router>
   <div>
    <Route exact path="/" component={App} />
   </div>
 </Router>
)

export default Routes;
