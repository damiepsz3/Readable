import React, {Component} from 'react';
import VoteController from '../VoteController/VoteController'
import ButtonsBox from '../ButtonsBox/ButtonsBox'
import CommentEdit from '../CommentEdit/CommentEdit'
import './CommentCard.css'

class CommentCard extends Component {
  state = {
    openEdit: false
  }

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

  openEdit = () => {
    this.setState({
      openEdit: true
    })
  }

  closeEdit = () => {
    this.setState({
      openEdit: false
    })
  }

  handleEdit = (partialComment) => {
    const changes = {
      ...partialComment,
      id: this.props.comment.id,
      timestamp: Date.now()
    }
    this.props.editComment(changes)
    this.closeEdit()
  }

  render() {
    const { body, author, voteScore, timestamp } = this.props.comment
    const { openEdit } = this.state
    return (
      <div className='comment-card'>
        <div className='comment-info'>
          <h3>{body}</h3>
          <div className="comment-info-author">
            <em>By {author} on {this.formatDate(timestamp)}</em>
          </div>
          <ButtonsBox deleteFunc={this.handleDelete} editFunc={this.openEdit}/>
        </div>
        <VoteController score={voteScore} voteFunction={this.handleVote} />
        <CommentEdit open={openEdit} comment={this.props.comment} editFunction={this.handleEdit} close={this.closeEdit}></CommentEdit>
      </div>
  );
  }
}


export default CommentCard
