import React, {Component} from 'react';
import { withRouter } from 'react-router'
import { fetchComments } from '../../actions'
import { connect } from 'react-redux'
import Spinner from 'react-spinkit';
import CommentCard from '../CommentCard/CommentCard'
import './CommentsBox.css'


class CommentsBox extends Component {
  componentDidMount() {
    this.props.getComments(this.props.postId)
  }
  
  render() {
    const { isFetching, comments } = this.props
    return (
      <div className="comments-box">
        {isFetching ?
          <Spinner name="ball-zig-zag-deflect" color="blue"/>
        :
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>
                <CommentCard id={comment.id} />
              </li>
            ))}
          </ul>
        }

      </div>
    );
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
  const { id } = ownProps.match.params
  const { isFetching, byId } = entities.comments
  return {
    postId: id,
    comments: Object.keys(byId).map(comId => byId[comId]).filter(comment => comment.parentId === id),
    isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (postId) => dispatch(fetchComments(postId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsBox))
