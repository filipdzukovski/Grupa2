import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Navigation} from './components/Navigation';
import {Routes,Route} from 'react-router-dom';
import {ChildComponent} from './components/ChildComponent';
import {NotFound} from './components/NotFound';

export function App(){

  return(
    <div id="app">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}>
          <Route path="us" element={<ChildComponent/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}


{/* <Switch>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
</Switch> */} // v5 implementation of react-router-dom