import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
  <Route exact path="/" component={HomePage}/>
  <Route path="/user" component={RegisterPage}/>
  {/* <Route path="/:user" component={User}/>
  <Route component={NoMatch}/> */}
</Switch>
</Router>
    </div>
  );
}

export default App;
