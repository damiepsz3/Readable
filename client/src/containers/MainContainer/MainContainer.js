import React, { Component } from 'react';
import ListsContainer from '../ListsContainer/ListsContainer'
import PostContainer from '../PostContainer/PostContainer'
import ModalContainer from '../ModalContainer/ModalContainer'
import { Route } from 'react-router-dom'
import './MainContainer.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { modalSwitch } from '../../actions'

class MainContainer extends Component {

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
        <div className='main-container'>
          <Route exact path="/" component={ListsContainer}/>
          <Route exact path="/:category" component={ListsContainer}/>
          <Route exact path="/:category/:id" component={PostContainer}/>
        </div>
        <ModalContainer />
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchModal: (open) => dispatch(modalSwitch(open)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(MainContainer))
