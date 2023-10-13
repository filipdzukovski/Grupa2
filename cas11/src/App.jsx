import {Routes,Route} from 'react-router-dom';
import {Cake} from './components/Cake';
import {Comments} from './components/Comments';
import { Nav } from './components/Nav';

export function App(){

  return(
    <div id="app">
      <Nav/>
      <Routes>
        <Route path="/cake" element={<Cake/>}/>
        <Route path="/comments" element={<Comments/>}/>
      </Routes>
    </div>
  )
}