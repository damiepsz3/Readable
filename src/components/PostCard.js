import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { voteIssuing, deletePostCall } from '../actions'
import capitalize from 'capitalize'
import { MdThumbUp, MdThumbDown, MdCreate, MdDelete } from 'react-icons/lib/md'

class PostCard extends Component {

  render() {
    const { deletePost, postVote, post } = this.props
    const { title, author, comments, voteScore, id, category } = post
    return (
      <div className='post-card'>
        <div className='post-card-info'>
          <span><Link to={`/${category}`}>{capitalize.words(category)}</Link></span>
          <h3><Link to={`/${category}/${id}`}>{title}</Link></h3>
          <p>By {author}. With {comments ? `${comments.length} comments` : `0 comment`}.</p>
          <div>
            <a className="post-button"><MdCreate/></a>
            <a className="post-button" onClick={() => deletePost(id)}><MdDelete/></a>
          </div>
        </div>
        <div className='post-card-vote'>
          <a className="thump-up" onClick={() => postVote(id, 'upVote')}><MdThumbUp/></a>
          <span>{voteScore}</span>
          <a className="thump-down" onClick={() => postVote(id, 'downVote')}><MdThumbDown/></a>
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
