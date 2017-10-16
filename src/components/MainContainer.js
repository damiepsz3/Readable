import React, { Component } from 'react';
import PostsList from './PostsList'
import CategoriesList from './CategoriesList'
import { Route } from 'react-router-dom'

class MainContainer extends Component {

  render() {
    return (
    <div className="blog-content">
      <CategoriesList/>
      <Route exact path="/" component={PostsList}/>
      <Route exact path="/:category" component={PostsList}/>
    </div>
    );
  }
}


export default MainContainer
