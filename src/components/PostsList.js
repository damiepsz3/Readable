import React, { Component } from 'react';
import PostCard from './PostCard'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'


class PostsList extends Component {
  render() {
    const {category, posts, sortBy} = this.props
    let postPrint = category !== '/' ? posts.filter(post => post.category === category) : posts
    switch(sortBy) {
      case 'DATE_LH':
        // postPrint = postPrint.sort()
        break;
      case 'DATE_HL':
        break;
      case 'SCORE_LH':
        break;
      case 'SCORE_HL':
        break;
      default:
        break;

    }
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
      })
      return acum
    }, []),
    category: category || '/',
    sortBy: sortBy.selected
  }
}

// const mapDispatchToProps = () => {return {}}

export default withRouter(connect(mapStateToProps)(PostsList))
