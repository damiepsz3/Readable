import React, { Component } from 'react';
import PostView from './PostView'
import CommentsBox from './CommentsBox'

class PostLayout extends Component {

  render() {
    return (
      <div>
          <PostView />
          <CommentsBox />
      </div>
    );
  }
}


export default PostLayout
