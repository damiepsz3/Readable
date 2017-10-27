import React, { Component } from 'react';
import Modal from 'react-modal'
import NewPost from '../../components/NewPost/NewPost'

class ModalContainer extends Component {
  render() {
    return (
      <div>
        <NewPost/>
      </div>
    )
  }
}

export default ModalContainer
