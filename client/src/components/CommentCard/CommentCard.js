import React, {Component} from 'react';
import { connect } from 'react-redux'
import { voteComment, deleteCommentCall } from '../../actions'
import VoteController from '../VoteController/VoteController'
import ButtonsBox from '../ButtonsBox/ButtonsBox'
import './CommentCard.css'

class CommentCard extends Component {
  formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.getUTCFullYear()}/${date.getUTCMonth()}/${date.getUTCDay()}`
  }


  render() {
    const { body, author, voteScore, timestamp, id, postComment, deleteComment, parentId } = this.props
    return (
      <div className='comment-card'>
        <div className='comment-info'>
          <h3>{body}</h3>
          <div className="comment-info-author">
            <em>By {author} on {this.formatDate(timestamp)}</em>
          </div>
          <ButtonsBox id={id}  parentId={parentId} deleteFunc={deleteComment}/>
        </div>
        <VoteController score={voteScore} id={id} voteFunction={postComment} />
      </div>
  );
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
    const { body, author, voteScore, timestamp, parentId } = entities.comments.byId[ownProps.id];
    return {
      body,
      author,
      voteScore,
      timestamp,
      parentId
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postComment: (id, option) => dispatch(voteComment(id, option)),
    deleteComment: (id, parentId) => dispatch(deleteCommentCall(id, parentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentCard)
