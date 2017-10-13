import React, { Component } from 'react';
import PostCard from './PostCard'

class PostsContent extends Component {
  render() {
    const {category, posts} = this.props
    const postPrint = category.name !== 'show all' ? posts.filter(post => post.category === category.name ) : posts
    return (
      <div className="blog-posts">
        <ul>
          {postPrint.map(post => (
            <li key={post.id}>
              <PostCard id={post.id} />
            </li>
          ))}
        </ul>
      </div>
   )}
}

export default PostsContent
