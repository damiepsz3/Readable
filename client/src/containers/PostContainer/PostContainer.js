import React, { Component } from 'react';
import PostLayout from '../../components/PostLayout/PostLayout'
import CommentsBox from '../../components/CommentsBox'
import './PostContainer.css'

class PostContainer extends Component {

  render() {
    return (
      <div className='post-container'>
          <PostLayout />
          <CommentsBox />
      </div>
    );
  }
}


export default PostContainer
