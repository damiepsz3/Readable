import React, {Component} from 'react';
import { withRouter } from 'react-router'
import { deletePostCall, voteIssuing } from '../../actions'
import { connect } from 'react-redux'
import Spinner from 'react-spinkit';
import './PostLayout.css'
import CategoryTag from '../CategoryTag/CategoryTag'
import ButtonsBox from '../ButtonsBox/ButtonsBox'
import VoteController from '../VoteController/VoteController'
import { MdAccountCircle } from 'react-icons/lib/md'


class PostLayout extends Component {


  render() {
    const { id, title, author, body, category, voteScore, isFetching, deletePost, postVote } = this.props
    return (
    <div className='post-layout'>
      {isFetching ?
        <Spinner name="ball-zig-zag-deflect" color="blue"/>
      :
        <div>
          <div className="post-header">
            <div className="post-header-tag">
              <CategoryTag category={category}/>
            </div>
            <div className="post-header-buttons">
              <ButtonsBox id={id} deleteFunc={deletePost}/>
            </div>
          </div>
          <h1>{title}</h1>
          <em>Posted by <MdAccountCircle/> {author}.</em>
          <p>{body}</p>
          <VoteController id={id} score={voteScore} voteFunction={postVote}/>
          <hr></hr>
        </div>
      }
    </div>);
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
  const { id } = ownProps.match.params
  const post = entities.posts.byId[id] || {}
  const isFetching = entities.posts.isFetching
  return {
    id: id,
    title: post.title || null,
    author: post.author || null,
    body: post.body || null,
    voteScore: post.voteScore || null,
    category: post.category || '...',
    isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePostCall(id)),
    postVote: (id, option) => dispatch(voteIssuing(id, option))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostLayout))
