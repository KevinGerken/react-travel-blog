import React from 'react';
import Header from './Header';
import Nav from './Nav';
import ImageScroll from './ImageScroll';
import About from './About';
import Support from './Support'
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ImageScroll />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
