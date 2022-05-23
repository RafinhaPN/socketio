import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Home from './pages/Home';
import Contatos from './pages/Contatos';


function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/contatos' component={Contatos}/>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
