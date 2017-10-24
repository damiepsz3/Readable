import React, {Component} from 'react';
import { connect } from 'react-redux'
import { voteComment } from '../../actions'
import VoteController from '../VoteController/VoteController'
import ButtonsBox from '../ButtonsBox/ButtonsBox'
import './CommentCard.css'

class CommentCard extends Component {
  formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.getUTCFullYear()}/${date.getUTCMonth()}/${date.getUTCDay()}`
  }


  render() {
    const { body, author, voteScore, timestamp, id, postComment} = this.props
    return (
      <div className='comment-card'>
        <div className='comment-info'>
          <h3>{body}</h3>
          <div className="comment-info-author">
            <em>By {author} on {this.formatDate(timestamp)}</em>
          </div>
          <ButtonsBox/>
        </div>
        <VoteController score={voteScore} id={id} voteFunction={postComment}/>
      </div>
  );
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
    const { body, author, voteScore, timestamp } = entities.comments.byId[ownProps.id];
    return {
      body,
      author,
      voteScore,
      timestamp
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postComment: (id, option) => dispatch(voteComment(id, option))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentCard)
