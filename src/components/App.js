import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import '../App.css'
import { firstCall } from '../actions'
import PostCard from './PostCard'

class App extends Component {

  componentDidMount () {
    this.props.getInfo()

  }

  render() {
    const { categories, posts } = this.props.blog
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="blog">
            <div className="blog-title">
              <h1>Readable</h1>
            </div>
            <div className="blog-content">
              <div className="blog-categories">
                <ul>
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button>{cat.name}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="blog-posts">
                <ul>
                  {posts.map( post => (
                    <li key={post.id}>
                      <PostCard id={post.id} title={post.title} author={post.author} comments={post.comments} voteScore={post.voteScore} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

const mapStateToProps = ({ entities }) => {
  const { categories, posts, comments } = entities
  return {
    blog: {
      categories: Object.keys(categories.byId).map(id => categories.byId[id]),
      posts: Object.keys(posts.byId).reduce((acum, id) => {
        const post = {
          ...posts.byId[id],
          'comments': posts.byId[id].comments
            ? posts.byId[id].comments.map(comId => comments.byId[comId])
            : []
        }
        acum.push(post)
        return acum
      },[])
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(firstCall()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
