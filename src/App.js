import React, { Component } from 'react'
import Newsbox from './components/Newsbox'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import NeNavbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {
  state = {
    progress : 0
  }
  setprogress = (progress)=>{
    this.setState({
      progress : progress
    })
  }
  render() {
    
    return (
      <>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <NeNavbar/>
        <BrowserRouter> 
        <Routes>
          <Route exact path='/' element={<Newsbox setprogress={this.setprogress} category="" />}/>
          <Route exact path='/business' element={<Newsbox setprogress={this.setprogress} category="business" />}/>
          <Route exact path='/entertainment' element={<Newsbox setprogress={this.setprogress} category="entertainment" />}/>
          <Route exact path='/general' element={<Newsbox setprogress={this.setprogress} category="general" />}/>
          <Route exact path='/health' element={<Newsbox setprogress={this.setprogress} category="health" />}/>
          <Route exact path='/science' element={<Newsbox setprogress={this.setprogress} category="science" />}/>
          <Route exact path='/sports' element={<Newsbox setprogress={this.setprogress} category="sports" />}/>
          <Route exact path='/technology' element={<Newsbox setprogress={this.setprogress} category="technology" />}/>
        </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App
