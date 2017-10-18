import React, { Component } from 'react'
import '../App.css'
import MainContainer from '../containers/MainContainer'
class App extends Component {

  render() {
    return (
      <div className="blog">
        <div className="blog-title">
          <h1>Readable Blog</h1>
        </div>
        <MainContainer/>
      </div>
    )
  }
}

export default App
