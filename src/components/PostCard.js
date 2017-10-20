import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { voteIssuing, deletePostCall } from '../actions'


class PostCard extends Component {

  render() {
    const { deletePost, postVote, post } = this.props
    const { title, author, comments, voteScore, id, category } = post
    return (
      <div className='post-card'>
        <div className='post-card-info'>
          <span>{category}</span>
          <h3><Link to={`/${category}/${id}`}>{title}</Link></h3>
          <p>Posted by {author}. <a>{comments ? comments.length : 0} comments</a></p>
          <button onClick={() => deletePost(id)}>Delete</button>
          <button>Edit</button>
        </div>
        <div className='post-card-vote'>
          <button onClick={() => postVote(id, 'upVote')}>Upvote</button>
          <span>{voteScore}</span>
          <button onClick={() => postVote(id, 'downVote')}>Downvote</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postVote: (id, option) => dispatch(voteIssuing(id, option)),
    deletePost: (id) => dispatch(deletePostCall(id))
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    post: entities.posts.byId[ownProps.idSelected]
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostCard)
