import React, {Component} from 'react';
import VoteController from '../VoteController/VoteController'
import ButtonsBox from '../ButtonsBox/ButtonsBox'
import './CommentCard.css'

class CommentCard extends Component {
  formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.`
  }

  handleDelete = () => {
    this.props.deleteComment(this.props.comment.id, this.props.comment.parentId)
  }

  handleVote = (option) => {
    this.props.voteComment(this.props.comment.id, option)
  }

  render() {
    const { body, author, voteScore, timestamp } = this.props.comment
    return (
      <div className='comment-card'>
        <div className='comment-info'>
          <h3>{body}</h3>
          <div className="comment-info-author">
            <em>By {author} on {this.formatDate(timestamp)}</em>
          </div>
          <ButtonsBox deleteFunc={this.handleDelete}/>
        </div>
        <VoteController score={voteScore} voteFunction={this.handleVote} />
      </div>
  );
  }
}


export default CommentCard
