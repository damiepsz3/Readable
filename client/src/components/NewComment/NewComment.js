import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createComment } from '../../actions'
import './NewComment.css'
import uuidv1 from 'uuid/v1'

class NewComment extends Component {
  state = {
    body: '',
    author: '',
    id: '',
    timestamp: '',
    parentId: this.props.parentId,
    deleted: false
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  createComment = () => {
    this.setState({
      id: uuidv1(),
      timestamp: Date.now()
    })
  }

  render() {
    const { body, author } = this.state
    return (
      <div className="new-comment">
        <input name='body' placeholder='Your comment here' value={body} onChange={this.handleInputChange}></input>
        <input name='author' placeholder='Written by' value={author} onChange={this.handleInputChange}></input>
        <div className='button-container'>
          <a onClick={() => this.createComment()}>Comment!</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    parentId: ownProps.parentId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newComment: (comment) => dispatch(createComment(comment))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NewComment))
