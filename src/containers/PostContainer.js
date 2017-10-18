import React, { Component } from 'react';
import PostLayout from '../components/PostLayout'
import CommentsBox from '../components/CommentsBox'

class PostContainer extends Component {

  render() {
    return (
      <div>
          <PostLayout />
          <CommentsBox />
      </div>
    );
  }
}


export default PostContainer
