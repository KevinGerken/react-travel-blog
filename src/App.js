import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <p>lorem  have built a component in React which is supposed to update its own style on window scroll to create a parallax effect.

The component render method looks like this:


This doesn't work because React doesn't know that the component has changed, and therefore the component is not rerendered.

I've tried storing the value of itemTranslate in the state of the component, and calling setState in the scroll callback. However, this makes scrolling unusable as this is terribly slow.

Any suggestion on how to do this?

Thanks.

javascript reactjs
shareimprove this question
edited Mar 7 '18 at 12:34

Candlejack
38799 silver badges2121 bronze badges
asked Apr 19 '15 at 4:33

Alejandro Pérez
70211 gold badge88 silver badges1313 bronze badges
8
Never bind an external event handler inside a render method. Rendering methods (and any other custom methods you call from render in the same thread) </p>
<p>lorem  have built a component in React which is supposed to update its own style on window scroll to create a parallax effect.

The component render method looks like this:


This doesn't work because React doesn't know that the component has changed, and therefore the component is not rerendered.

I've tried storing the value of itemTranslate in the state of the component, and calling setState in the scroll callback. However, this makes scrolling unusable as this is terribly slow.

Any suggestion on how to do this?

Thanks.

javascript reactjs
shareimprove this question
edited Mar 7 '18 at 12:34

Candlejack
38799 silver badges2121 bronze badges
asked Apr 19 '15 at 4:33

Alejandro Pérez
70211 gold badge88 silver badges1313 bronze badges
8
Never bind an external event handler inside a render method. Rendering methods (and any other custom methods you call from render in the same thread) </p>
<p>lorem  have built a component in React which is supposed to update its own style on window scroll to create a parallax effect.

The component render method looks like this:


This doesn't work because React doesn't know that the component has changed, and therefore the component is not rerendered.

I've tried storing the value of itemTranslate in the state of the component, and calling setState in the scroll callback. However, this makes scrolling unusable as this is terribly slow.

Any suggestion on how to do this?

Thanks.

javascript reactjs
shareimprove this question
edited Mar 7 '18 at 12:34

Candlejack
38799 silver badges2121 bronze badges
asked Apr 19 '15 at 4:33

Alejandro Pérez
70211 gold badge88 silver badges1313 bronze badges
8
Never bind an external event handler inside a render method. Rendering methods (and any other custom methods you call from render in the same thread) </p>
<Footer />
    </div>
    
  );
}

export default App;
