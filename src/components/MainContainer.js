import React, { Component } from 'react';
import Lists from './Lists'
import Post from './Post'
import { Route } from 'react-router-dom'

class MainContainer extends Component {

  render() {
    return (
    <div >
      <Route exact path="/" component={Lists}/>
      <Route exact path="/:category" component={Lists}/>
      <Route exact path="/:category/:id" component={Post}/>
    </div>
    );
  }
}


export default MainContainer
