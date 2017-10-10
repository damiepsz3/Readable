import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import '../App.css'
import { fetchCategories } from '../actions'
import { fetchPostsIfNeeded } from '../actions/posts.js'

class App extends Component {
  state = {
    categories: ['terror', 'humor', 'house']
  }

  componentDidMount () {
    this.props.getCategories()
    this.props.getPosts()

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

const mapStateToProps = ({ blogApp, posts, categories }) => {
  return {
    // blogApp,
    // // blogData: categories.reduce((acum, cat) => {
    // //   acum.push({
    // //     posts: posts.filter(post => post.category === cat.name),
    // //     ...cat
    // //   })
    // //   return acum
    // // },[])
    // blogData: posts.reduce((acum, post) => {
    //   acum.push({
    //     ...post,
    //     category: categories.find((cat) => cat.name === post.category)
    //   })
    //   return acum
    // }, [])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (data) => dispatch(fetchPostsIfNeeded(data)),
    getCategories: (data) => dispatch(fetchCategories(data)),
    // getComments: (data) => dispatch(fetchComments(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
