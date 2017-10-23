import React, {Component} from 'react';
import { withRouter } from 'react-router'
import { fetchPost } from '../../actions'
import { connect } from 'react-redux'
import Spinner from 'react-spinkit';
import './PostLayout.css'
import CategoryTag from '../CategoryTag/CategoryTag'
import { MdAccountCircle } from 'react-icons/lib/md'


class PostLayout extends Component {
  componentDidMount() {
    this.props.getPost(this.props.id)
  }

  render() {
    const { title, author, body, category, isFetching } = this.props
    return (
    <div className='post-layout'>
      {isFetching ?
        <Spinner name="ball-zig-zag-deflect" color="blue"/>
      :
        <div>
          <CategoryTag category={category}/>
          <h1>{title}</h1>
          <em>Posted by <MdAccountCircle/> {author}.</em>
          <p>{body}</p>
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
    category: post.category || '...',
    isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostLayout))
