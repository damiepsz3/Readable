import React, {Component} from 'react';
import { withRouter } from 'react-router'
import { fetchComments } from '../actions'
import { connect } from 'react-redux'
import Spinner from 'react-spinkit';


class CommentsBox extends Component {
  componentDidMount() {
    this.props.getComments(this.props.postId)
  }

  formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.getUTCFullYear()}/${date.getUTCMonth()}/${date.getUTCDay()}`
  }

  render() {
    const { isFetching, comments } = this.props
    // console.log(comments)
    return (
      <div>
        {isFetching ?
          <Spinner name="ball-zig-zag-deflect" color="green"/>
        :
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>
                <div>
                  <h3>{comment.body}</h3>
                  <span>By {comment.author} on {this.formatDate(comment.timestamp)}</span>
                </div>
                <div>
                  {comment.voteScore}
                </div>
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

  console.log()
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
