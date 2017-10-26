import React, { Component } from 'react'
import { withRouter } from 'react-router'
import '../App.css'
import MainContainer from '../containers/MainContainer/MainContainer'
import Modal from 'react-modal'
class App extends Component {
  state = {
    openModal: false
  }

  render() {
    const route = this.props
    const { openModal } = this.state
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
          {route.location.pathname !== '/' &&
            <div className="go-back">
              <a onClick={route.history.goBack}>Go back</a>
            </div>
          }
          <div className="add-post">
            <a onClick={()=>(this.setState({openModal: true}))}>New post</a>
          </div>
        </div>
        <MainContainer/>
        <Modal
          isOpen={openModal}
          style={customStyles}
        >
          <div className="new-post">
            <h1>Create a new post</h1>
            <input placeholder='Title'></input>
            <textarea placeholder='Body'></textarea>
            <input placeholder='Written by'></input>

          </div>
        </Modal>
      </div>
    )
  }
}

export default withRouter(App)
