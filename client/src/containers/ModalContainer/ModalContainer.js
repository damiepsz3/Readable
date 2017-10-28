import React, { Component } from 'react';
import Modal from 'react-modal'
import NewPost from '../../components/NewPost/NewPost'
import { connect } from 'react-redux'
import { modalSwitch } from '../../actions'


class ModalContainer extends Component {
  render() {
    const { isOpen } = this.props
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        borderRadius          : '5px',
        boxShadow             : '1px 1px 0.5px 0.8px rgba(0, 0, 0, .2)'
      }
    }
    return (
      <div>
        <Modal
          isOpen={isOpen}
          style={customStyles}
        >
          <NewPost/>
        </Modal>

      </div>
    )
  }
}

const mapStateProps = ({ uiState }) => {
  const { isOpen } = uiState.modal
  return {
    isOpen
  }
}

const mapDispatchProps = dispatch => {
  return {
    switchModal: (open) => dispatch(modalSwitch(open))
  }
}


export default connect(mapStateProps, mapDispatchProps)(ModalContainer)
