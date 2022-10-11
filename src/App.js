import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newsbox from './components/Newsbox'

export class App extends Component {
  render() {
    return (
    <>
    <Navbar/>
    <Newsbox/>
    </>
    )
  }
}

export default App
