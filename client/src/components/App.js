import React, { Component } from 'react'
import { withRouter } from 'react-router'
import '../App.css'
import MainContainer from '../containers/MainContainer/MainContainer'
import ModalContainer from '../containers/ModalContainer/ModalContainer'
import { connect } from 'react-redux'
import { modalSwitch, firstCall } from '../actions'


class App extends Component {
  componentDidMount() {
    this.props.fetchAll()
  }

  render() {
    const { location, history, switchModal } = this.props
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
            <a onClick={()=> switchModal(true)} >New post</a>
          </div>
        </div>
        <MainContainer/>
        <ModalContainer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchModal: (open) => dispatch(modalSwitch(open)),
    fetchAll: () => dispatch(firstCall())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
