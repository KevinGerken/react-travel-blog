import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Article from './Article';
import Footer from './Footer';
import Gear from './Gear';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import Support from './Support';

function App(props) {

  return (
    <div className="App">
      <Router basename={'/travel'}>
        <Route path='/' component={Header} />
        <Nav />      
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Gear' component={Gear} />
        <Route path='/Support' component={Support} />
        <Route path='/article/:id' component={Article} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
