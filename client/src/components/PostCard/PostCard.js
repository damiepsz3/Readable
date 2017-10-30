import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './PostCard.css'
import { MdAccountCircle, MdComment } from 'react-icons/lib/md'
import CategoryTag from '../CategoryTag/CategoryTag'
import VoteController from '../VoteController/VoteController'
import ButtonsBox from '../ButtonsBox/ButtonsBox'

class PostCard extends Component {

  handleDelete = () => {
    this.props.onDelete(this.props.post.id)
  }

  handleVote = (option) => {
    this.props.onVote(this.props.post.id, option)
  }

  render() {
    const { title, author, comments = [], voteScore, id, category } = this.props.post
    return (
      <div className='post-card'>
        <div className='post-card-info'>
          <CategoryTag category={category}/>
          <h3><Link to={`/${category}/${id}`}>{title}</Link></h3>
          <p><MdAccountCircle/> by {author}. <MdComment/> {comments.length === 1 ? `${comments.length} comment` : `${comments.length} comments`}.</p>
          <ButtonsBox deleteFunc={this.handleDelete} />
        </div>
        <VoteController score={voteScore} voteFunction={this.handleVote}/>
      </div>
    )
  }
}

export default PostCard
