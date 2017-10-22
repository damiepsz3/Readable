import React, { Component } from 'react';
import ListsContainer from '../ListsContainer/ListsContainer'
import PostContainer from '../PostContainer/PostContainer'
import { Route } from 'react-router-dom'
import './MainContainer.css'

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
