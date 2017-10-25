import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchPost } from '../../actions'
import PostLayout from '../../components/PostLayout/PostLayout'
import CommentsBox from '../../components/CommentsBox/CommentsBox'
import './PostContainer.css'

class PostContainer extends Component {
  componentDidMount() {
    this.props.getPost(this.props.id)
  }
  render() {
    const { deleted } = this.props
    return (
      <div className='post-container'>
        {deleted ?
          <h1>This post doesn't exist</h1>
        :
          <div>
            <PostLayout />
            <CommentsBox />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ entities, uiState }, ownProps) => {
  const { id } = ownProps.match.params
  const post = entities.posts.byId[id] || {}
  const deleted = post.deleted || false
  return {
    id,
    deleted
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostContainer))
