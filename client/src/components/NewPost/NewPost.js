import React, { Component } from 'react'
import { connect } from 'react-redux'
import { modalSwitch, createPost } from '../../actions'
import capitalize from 'capitalize'
import './NewPost.css'
import uuidv1 from 'uuid/v1'


class NewPost extends Component {
  state = {
    category: 'default',
    title: '',
    body:'',
    author: '',
    id: uuidv1(),
    timestamp: Date.now(),
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
    const { categories, switchModal, newPost } = this.props
    const { category, title, body, author } = this.state
    return (
      <div className="new-post">
        <h1>Create a new post</h1>
        <input placeholder='Title' value={title} name='title' onChange={this.handleInputChange}></input>
        <select onChange={this.handleInputChange} value={category} name='category'>
          <option disabled value="default">Categories</option>
          {categories.allIds.map(cat => (
              <option key={cat} value={cat}>
                {capitalize.words(cat)}
              </option>
            )
          )}
        </select>
        <textarea placeholder='Body' value={body} name='body' onChange={this.handleInputChange}></textarea>
        <input placeholder='Written by' value={author} name='author' onChange={this.handleInputChange}></input>
        <div className='actions'>
          <a className='cancel' onClick={() => switchModal(false)}>Cancel</a>
          <a className='post' onClick={() => newPost(this.state)}>Post!</a>
        </div>
      </div>
    );
  }
}

const mapStateProps = ({ entities }) => {
  const { categories } = entities
  return {
    categories
  }
}


const mapDispatchProps = dispatch => {
  return {
    switchModal: (open) => dispatch(modalSwitch(open)),
    newPost: (post) => dispatch(createPost(post))
  }
}

export default connect(mapStateProps,mapDispatchProps)(NewPost)
