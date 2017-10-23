import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { voteIssuing, deletePostCall } from '../../actions'
import './PostCard.css'
import { MdCreate, MdDelete, MdAccountCircle, MdComment } from 'react-icons/lib/md'
import CategoryTag from '../CategoryTag/CategoryTag'
import VoteController from '../VoteController/VoteController'

class PostCard extends Component {

  render() {
    const { deletePost, postVote, post } = this.props
    const { title, author, comments = [], voteScore, id, category } = post
    return (
      <div className='post-card'>
        <div className='post-card-info'>
          <CategoryTag category={category}/>
          <h3><Link to={`/${category}/${id}`}>{title}</Link></h3>
          <p><MdAccountCircle/> by {author}. <MdComment/> {comments.length === 1 ? `${comments.length} comment` : `${comments.length} comments`}.</p>
          <div>
            <a className="post-button"><MdCreate/></a>
            <a className="post-button" onClick={() => deletePost(id)}><MdDelete/></a>
          </div>
        </div>
        <VoteController score={voteScore} voteFunction={postVote} id={id}/>
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
