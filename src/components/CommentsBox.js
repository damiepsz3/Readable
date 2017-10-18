import React, {Component} from 'react';
import { withRouter } from 'react-router'
import { fetchComments } from '../actions'
import { connect } from 'react-redux'
import Spinner from 'react-spinkit';


class CommentsBox extends Component {
  componentDidMount() {
    this.props.getComments(this.props.match.params.id)
  }

  render() {
    return (<div><Spinner name="ball-zig-zag-deflect" color="green"/></div>);
  }
}

const mapStateToProps = () => {
  return {
    willsee: null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (postId) => dispatch(fetchComments(postId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsBox))
