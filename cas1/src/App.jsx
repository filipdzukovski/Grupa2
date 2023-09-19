// import React from 'react'; const React = require('react')
import {Hello} from './components/Hello';
// import {Goodbye} from './components/Goodbye' 

function App(){

  const broj = 1;
  let fraza = 'string vrednost';
  var karakter = 'c';
 
  return(
      <div id="app">
        <Hello/>
        <h2>Hello from my first React App again</h2>
        <Hello/>
        <hr/>
        <p>{5+3}</p>
        <h2>Fraza: {broj}</h2>
        <h4>Broj: {fraza}</h4>
        <h6>Karakter na denot: {karakter}</h6>
        {/* <Goodbye/> */}
      </div>

    )
}

export default App;