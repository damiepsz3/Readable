import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { voteIssuing } from '../actions'

class PostCard extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    voteScore: PropTypes.number.isRequired
  }

  render() {
    const { title, author, comments, voteScore, id, postVote } = this.props
    return (
      <div className='post-card'>
        <div className='post-card-info'>
          <h3>{title}</h3>
          <p>Posted by {author}. <a>{comments.length} comments</a></p>
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
    postVote: (id, option) => dispatch(voteIssuing(id, option))
  }
}

const mapStateToProps = () => {
  return {

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostCard)
