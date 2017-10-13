import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import '../App.css'
import { firstCall } from '../actions'
import PostsContent from './PostsContent'

class App extends Component {

  componentDidMount () {
    this.props.getInfo()
  }

  render() {
    const { categories, posts } = this.props.blog
    return (
      <div className="blog">
        <div className="blog-title">
          <h1>Readable</h1>
        </div>
        <div className="blog-content">
          <div className="blog-categories">
            <ul>
              {categories.map((cat) => (
                <li key={cat.name}>
                  <button>
                    <Link to={`/${cat.path}`}>
                      {cat.name}
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {categories.map(category => (
            <Route
              key={category.path} exact path={`/${category.path}`} render={() => <PostsContent category={category} posts={posts}/>}/>
          ))}
        </div>

      </div>
    )
  }
}


const mapStateToProps = ({ entities }) => {
  const { categories, posts } = entities
  return {
    blog: {
      categories: Object.keys(categories.byId).map(id => categories.byId[id]),
      posts: Object.keys(posts.byId).reduce((acum, id) => {
        acum.push({
          id: posts.byId[id].id,
          category: posts.byId[id].category,
          voteScore: posts.byId[id].voteScore,
          time: posts.byId[id].timestamp,
        })
        return acum
      }, [])
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(firstCall()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps,null, { pure: false })(App)
