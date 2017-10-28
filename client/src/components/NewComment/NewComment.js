import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import './NewComment.css'

class NewComment extends Component {
  state = {
    body: '',
    author: '',
    parentId: this.props.parentId
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { body, author } = this.state
    return (
      <div className="new-comment">
        <input name='body' placeholder='Your comment here' value={body}></input>
        <input name='author' placeholder='Written by' value={author}></input>
        <div className='button-container'>
          <a>Comment!</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NewComment))
