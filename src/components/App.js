import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import '../App.css'
import { fetchPosts, fetchCategories, fetchComments } from '../actions'

class App extends Component {
  state = {
    categories: ['terror', 'humor', 'house']
  }

  componentDidMount () {
    this.props.getPosts()
    this.props.getCategories()
  }

  render() {
    const { categories } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="blog-categories">
            <div className="blog-categories-title">
              <h1>Readable</h1>
            </div>
            <div className="blog-categories-content">
              {categories.map((cat) => (
                <li key={cat} className={cat}>
                  <span>{cat}</span>
                </li>
              ))}
            </div>
            <button onClick={() => this.props.receives()}>Click</button>
          </div>
        )} />
      </div>
    );
  }
}

const mapStateToProps = ({ posts, categories }) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (data) => dispatch(fetchPosts(data)),
    getCategories: (data) => dispatch(fetchCategories(data)),
    getComments: (data) => dispatch(fetchComments(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
