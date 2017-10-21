import React, { Component } from 'react';
import ListsContainer from '../containers/ListsContainer'
import PostContainer from '../containers/PostContainer'
import { Route } from 'react-router-dom'

class MainContainer extends Component {

  render() {
    return (
    <div className='main-container'>
      <Route exact path="/" component={ListsContainer}/>
      <Route exact path="/:category" component={ListsContainer}/>
      <Route exact path="/:category/:id" component={PostContainer}/>
    </div>
    );
  }
}


export default MainContainer
