import React from 'react';
import './App.css';
import Frontpage from './Components/Frontpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from './Components/Shop';


function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          Placeholder
        </div>
      </header>
      <div className="container">
      <Router>
        <Switch>
          {/* Frontpage wird automatisch hier als Default geladen
          Mann muss es nicht extra mit 
          <Frontpage/>
          einbinden */}
          <Route exact path="/" component={Frontpage} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
