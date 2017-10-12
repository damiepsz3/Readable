import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PostCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  }

  render() {
    const { title, author, comments } = this.props
    return (
      <div className='postcard'>
        <h3>{title}</h3>
        <p>{author}</p>
        <a>{comments.length} comments</a>
      </div>
    )
  }
}

export default PostCard
