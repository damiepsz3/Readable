import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../App.css'
import MainContainer from '../containers/MainContainer/MainContainer'
import NewPost from './NewPost/NewPost'
import Modal from 'react-modal'
import { modalSwitch } from '../actions'
class App extends Component {
  render() {
    const { location, isOpen, history, switchModal } = this.props
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
    };
    return (
      <div className="blog">
        <div className="blog-title">
          <h1>Readable Blog</h1>
          {location.pathname !== '/' &&
            <div className="go-back">
              <a onClick={history.goBack}>Go back</a>
            </div>
          }
          <div className="add-post">
            <a onClick={()=> switchModal(true)}>New post</a>
          </div>
        </div>
        <MainContainer/>
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

export default withRouter(connect(mapStateProps, mapDispatchProps)(App))
