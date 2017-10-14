import React, { Component } from 'react';
import PostsContent from './PostsContent'
import CategoriesList from './CategoriesList'

export default class MainContainer extends Component {
  render() {
    const { category, posts } = this.props
    return (
    <div className="blog-content">
      <CategoriesList/>
      <PostsContent/>
    </div>
    );
  }
}
