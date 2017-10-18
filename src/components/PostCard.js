import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { voteIssuing } from '../actions'


class PostCard extends Component {

  render() {
    const { postVote, posts } = this.props
    const { title, author, comments, voteScore, id, category } = posts.find((post) => post.id === this.props.id)

    return (
      <div className='post-card'>
        <div className='post-card-info'>
          <span>{category}</span>
          <h3><Link to={`/${category}/${id}`}>{title}</Link></h3>
          <p>Posted by {author}. <a>{comments ? comments.length : 0} comments</a></p>
        </div>
        <div className='post-card-vote'>
          <button onClick={() => postVote(id, 'upVote')}>Upvote</button>
          <span>{voteScore}</span>
          <button onClick={() => postVote(id, 'downVote')}>Downvote</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postVote: (id, option) => dispatch(voteIssuing(id, option))
  }
}

const mapStateToProps = ({ entities }) => {
  const { posts } = entities
  return {
    posts: Object.keys(posts.byId).reduce((acum, id) => {
      const post = {
        ...posts.byId[id]
      }
      acum.push(post)
      return acum
    },[])
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostCard)
