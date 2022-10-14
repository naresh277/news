import React, { Component } from 'react'
import Newsbox from './components/Newsbox'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import NeNavbar from './components/Navbar';



export class App extends Component {
  render() {
    return (
      <>
      <NeNavbar/>
        <BrowserRouter> 
        <Routes>
          <Route exact path='/' element={<Newsbox category="" />}/>
          <Route exact path='/business' element={<Newsbox category="business" />}/>
          <Route exact path='/entertainment' element={<Newsbox category="entertainment" />}/>
          <Route exact path='/general' element={<Newsbox category="general" />}/>
          <Route exact path='/health' element={<Newsbox category="health" />}/>
          <Route exact path='/science' element={<Newsbox category="science" />}/>
          <Route exact path='/sports' element={<Newsbox category="sports" />}/>
          <Route exact path='/technology' element={<Newsbox category="technology" />}/>
        </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App
