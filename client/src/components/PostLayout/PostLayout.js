import React, { Component } from 'react'
import './PostLayout.css'
import CategoryTag from '../CategoryTag/CategoryTag'
import ButtonsBox from '../ButtonsBox/ButtonsBox'
import VoteController from '../VoteController/VoteController'
import { MdAccountCircle } from 'react-icons/lib/md'


class PostLayout extends Component {

  handleVote = (option) => {
    this.props.onPostVote(this.props.post.id, option)
  }

  handleDelete = () => {
    this.props.onPostDelete(this.props.post.id)
  }

  render() {
    const { post } = this.props
    return (
    <div className='post-layout'>
        <div>
          <div className="post-header">
            <div className="post-header-tag">
              <CategoryTag category={post.category}/>
            </div>
            <div className="post-header-buttons">
              <ButtonsBox deleteFunc={this.handleDelete}/>
            </div>
          </div>
          <h1>{post.title}</h1>
          <em>Posted by <MdAccountCircle/> {post.author}.</em>
          <p>{post.body}</p>
          <VoteController score={post.voteScore} voteFunction={this.handleVote}/>
          <hr></hr>
        </div>
    </div>);
  }
}





export default PostLayout
