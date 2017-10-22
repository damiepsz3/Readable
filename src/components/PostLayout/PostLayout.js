import React, {Component} from 'react';
import { withRouter } from 'react-router'
import { fetchPost } from '../../actions'
import { connect } from 'react-redux'
import Spinner from 'react-spinkit';
import './PostLayout.css'

class PostLayout extends Component {
  componentDidMount() {
    this.props.getPost(this.props.id)
  }

  render() {
    const { title, author, body, isFetching } = this.props
    return (
    <div className='post-layout'>
      {isFetching ?
        <Spinner name="ball-zig-zag-deflect" color="blue"/>
      :
        <div>
          <h1>{title}</h1>
          <span>{author}</span>
          <p>{body}</p>
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
    isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostLayout))
