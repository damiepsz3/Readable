import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import '../App.css'
import { firstCall } from '../actions'
import MainContainer from './MainContainer'
class App extends Component {

  componentDidMount () {
    this.props.getInfo()
  }

  render() {
    const { categories, posts, path, name } = this.props
    return (
      <div className="blog">
        <div className="blog-title">
          <h1>Readable Blog</h1>
        </div>
        {categories.map(category => (
            <Route
              key={category.path} exact path={`/${category.path}`} render={() => (
              <MainContainer/>
              )}/>
          ))}
      </div>
    )
  }
}


const mapStateToProps = ({ entities, uiState }) => {
  const { categories, posts } = entities
  const { path, name } = uiState.categoryFilter
  return {
    categories: Object.keys(categories.byId).map(id => categories.byId[id]),
    path,
    name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(firstCall()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps,null, { pure: false })(App)
