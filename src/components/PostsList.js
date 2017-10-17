import React, { Component } from 'react';
import PostCard from './PostCard'
import { connect } from 'react-redux'

class PostsList extends Component {
  render() {
    const {category, posts} = this.props
    const postPrint = category !== '/' ? posts.filter(post => post.category === category) : posts
    return (
      <div className="blog-posts">
        <ul>
          {postPrint.length ?
            postPrint.map(post => (
              <li key={post.id}>
                <PostCard id={post.id} />
              </li>
            ))
            :
            <h3>There is not post under {category} </h3>
        }
        </ul>
      </div>
   )}
}

const mapStateToProps = ({ entities }, ownProps) => {
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
    category: ownProps.category || '/'
  }
}

// const mapDispatchToProps = () => {return {}}

export default connect(mapStateToProps )(PostsList)
