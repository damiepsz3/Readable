import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { deletePostCall, voteIssuing, voteComment, deleteCommentCall, createComment } from '../../actions'
import PostLayout from '../../components/PostLayout/PostLayout'
import CommentsBox from '../../components/CommentsBox/CommentsBox'
import './PostContainer.css'
import uuidv1 from 'uuid/v1'

class PostContainer extends Component {
  handlerNewComment = (partialComment) => {
    const comment = {
      ...partialComment,
      id: uuidv1(),
      timestamp: Date.now(),
      parentId: this.props.post.id
    }
    this.props.addComment(comment)
  }

  render() {
    const { post, postVote, postDelete, comments, commentDelete, commentVote } = this.props
    return (
      <div className='post-container'>
        {post.deleted ?
          <h1>This post doesn't exist</h1>
        :
          <div>
            <PostLayout post={post} onPostVote={postVote} onPostDelete={postDelete}/>
            <CommentsBox comments={comments} onCommentVote={commentVote} onCommentDelete={commentDelete} onAddComment={this.handlerNewComment}/>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
  const { id } = ownProps.match.params
  const post = entities.posts.byId[id] || {}
  const comments = Object.keys(entities.comments.byId).map(comId => entities.comments.byId[comId]).filter(comment => comment.parentId === id && comment.deleted === false)
  return {
    post,
    comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postDelete: (id) => dispatch(deletePostCall(id)),
    postVote: (id, option) => dispatch(voteIssuing(id,option)),
    commentVote: (id, option) => dispatch(voteComment(id, option)),
    commentDelete: (id, parentId) => dispatch(deleteCommentCall(id, parentId)),
    addComment: (comment) => dispatch(createComment(comment))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContainer))
