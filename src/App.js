import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer"
import DisplayEvents from './components/DisplayEvents'
import EventDetails from './components/EventDetails'
import DisplayGroups from './components/DisplayGroups';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/events' component={DisplayEvents}></Route>
        <Route path='/events/details' component={EventDetails}></Route>
        <Route exact path='/groups' component={DisplayGroups}></Route>
        </Switch>
        <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
