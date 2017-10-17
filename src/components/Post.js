import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
  }

  render() {
    const { isFetching, title, author, body } = this.props
    return (
      <div>
        {isFetching ?
          <span> descargando</span>
          :
          <div>
            <h1>{title}</h1>
            <span>{author}</span>
            <p>{body}</p>
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = ({ entities }, ownProps) => {
  const { id } = ownProps.match.params
  const post = entities.posts.byId[id] || {}
  const isFetching = entities.posts.isFetching
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Post)
