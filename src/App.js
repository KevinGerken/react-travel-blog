import React from 'react';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Support from './Support';
import Gear from './Gear';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Gear />
      <Footer />
    </div>
  );
}

export default App;
