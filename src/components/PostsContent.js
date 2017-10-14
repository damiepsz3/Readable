import React, { Component } from 'react';
import PostCard from './PostCard'
import { connect } from 'react-redux'


class PostsContent extends Component {
  render() {
    const {name, posts} = this.props
    console.log(posts)
    const postPrint = name !== 'SHOW_ALL' ? posts.filter(post => post.category === name ) : posts
    return (
      <div className="blog-posts">
        <ul>
          {postPrint.map(post => (
            <li key={post.id}>
              <PostCard id={post.id} />
            </li>
          ))}
        </ul>
      </div>
   )}
}

const mapStateToProps = ({ entities, uiState}) => {
  const { name } = uiState.categoryFilter
  const { posts } = entities
  return {
    posts: Object.keys(posts.byId).reduce((acum, id) => {
      acum.push({
        id: posts.byId[id].id,
        category: posts.byId[id].category,
        voteScore: posts.byId[id].voteScore,
        time: posts.byId[id].timestamp,
      })
      return acum
    }, []),
    name
  }
}

// const mapDispatchToProps = () => {return {}}

export default connect(mapStateToProps,)(PostsContent)
