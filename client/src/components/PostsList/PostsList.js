import React, { Component } from 'react';
import PostCard from '../PostCard/PostCard.js'
import './PostsList.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import sortBy from 'sort-by'


class PostsList extends Component {
  render() {
    const { posts, selected} = this.props
    return (
      <div className="blog-posts">
        <ul>
          {posts.length ?
            posts.sort(sortBy(selected.value)).map(post => (
              <li key={post.id}>
                <PostCard idSelected={post.id} />
              </li>
            ))
            :
            <h3>There is no post here! </h3>
        }
        </ul>
      </div>
   )}
}

const mapStateToProps = ({ entities, uiState }, ownProps) => {
  const { posts } = entities
  const { sortBy } = uiState
  const  category  = ownProps.match.params.category || '/'
  return {
    posts: Object.keys(posts.byId).reduce((acum, id) => {
      let categoryBool = category === '/' ? true : posts.byId[id].category === category
      if(!posts.byId[id].deleted && categoryBool) {
        acum.push({
          id: posts.byId[id].id,
          category: posts.byId[id].category,
          voteScore: posts.byId[id].voteScore,
          time: posts.byId[id].timestamp
        })
      }
      return acum
    }, []),
    selected: sortBy.selected
  }
}


export default withRouter(connect(mapStateToProps)(PostsList))
