import React, { Component } from 'react';
import Lists from './Lists'
import PostLayout from './PostLayout'
import { Route } from 'react-router-dom'

class MainContainer extends Component {

  render() {
    return (
    <div>
      <Route exact path="/" component={Lists}/>
      <Route exact path="/:category" component={Lists}/>
      <Route exact path="/:category/:id" component={PostLayout}/>
    </div>
    );
  }
}


export default MainContainer
