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
  api_key = process.env.REACT_APP_API_KEY;
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
          <Route exact path='/' element={<Newsbox setprogress={this.setprogress} api_key={this.api_key} category="" />}/>
          <Route exact path='/business' element={<Newsbox setprogress={this.setprogress} api_key={this.api_key} category="business" />}/>
          <Route exact path='/entertainment' element={<Newsbox setprogress={this.setprogress} api_key={this.api_key} category="entertainment" />}/>
          <Route exact path='/general' element={<Newsbox setprogress={this.setprogress} api_key={this.api_key} category="general" />}/>
          <Route exact path='/health' element={<Newsbox setprogress={this.setprogress} api_key={this.api_key} category="health" />}/>
          <Route exact path='/science' element={<Newsbox setprogress={this.setprogress} api_key={this.api_key} category="science" />}/>
          <Route exact path='/sports' element={<Newsbox setprogress={this.setprogress} api_key={this.api_key} category="sports" />}/>
          <Route exact path='/technology' element={<Newsbox setprogress={this.setprogress} api_key={this.api_key} category="technology" />}/>
        </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App
