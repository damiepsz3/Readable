import React, {Component} from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Spinner from 'react-spinkit';
import CommentCard from '../CommentCard/CommentCard'
import NewComment from '../NewComment/NewComment'
import './CommentsBox.css'


class CommentsBox extends Component {

  render() {
    const { isFetching, comments, postId } = this.props
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
            <NewComment parentId={postId}/>
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
    comments: Object.keys(byId).map(comId => byId[comId]).filter(comment => comment.parentId === id && comment.deleted === false),
    isFetching
  }
}


export default withRouter(connect(mapStateToProps)(CommentsBox))
