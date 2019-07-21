import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Home from './Home'
import About from './About';
import Support from './Support';
import Gear from './Gear';
import Footer from './Footer';
import './App.css';

function App(props) {

  return (
    <div className="App">
      <Router>
        <Route path='/' component={Header} />
        <Nav />      
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Gear' component={Gear} />
        <Route path='/Support' component={Support} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
