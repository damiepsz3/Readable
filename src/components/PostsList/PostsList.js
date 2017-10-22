import React, { Component } from 'react';
import PostCard from '../PostCard/PostCard.js'
import './PostsList.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import sortBy from 'sort-by'


class PostsList extends Component {
  render() {
    const {category, posts, selected} = this.props
    const postPrint = category !== '/' ? posts.filter(post => post.category === category) : posts
    return (
      <div className="blog-posts">
        <ul>
          {postPrint.length ?
            postPrint.filter(post => !post.deleted).sort(sortBy(selected.value)).map(post => (
              <li key={post.id}>
                <PostCard idSelected={post.id} />
              </li>
            ))
            :
            <h3>There is not post under {category} </h3>
        }
        </ul>
      </div>
   )}
}

const mapStateToProps = ({ entities, uiState }, ownProps) => {
  const { posts } = entities
  const { sortBy } = uiState
  const { category } = ownProps.match.params
  return {
    posts: Object.keys(posts.byId).reduce((acum, id) => {
      acum.push({
        id: posts.byId[id].id,
        category: posts.byId[id].category,
        voteScore: posts.byId[id].voteScore,
        time: posts.byId[id].timestamp,
        deleted: posts.byId[id].deleted
      })
      return acum
    }, []),
    category: category || '/',
    selected: sortBy.selected
  }
}


export default withRouter(connect(mapStateToProps)(PostsList))
