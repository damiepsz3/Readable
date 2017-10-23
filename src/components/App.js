import React, { Component } from 'react'
import { withRouter } from 'react-router'
import '../App.css'
import MainContainer from '../containers/MainContainer/MainContainer'
class App extends Component {
  render() {
    const route = this.props;
    return (
      <div className="blog">
        <div className="blog-title">
          <h1>Readable Blog</h1>
          {route.location.pathname !== '/' &&
            <a className="go-back" onClick={route.history.goBack}>Go back</a>
          }
        </div>
        <MainContainer/>
      </div>
    )
  }
}

export default withRouter(App)
