import React, {Component} from 'react';
import PostsList from './PostsList'
import CategoriesList from './CategoriesList'
import { firstCall } from '../actions'
import { connect } from 'react-redux'

class Lists extends Component {

  componentDidMount(){
    this.props.firstCall()
  }

  render() {
    return (
      <div className="blog-content">
        <CategoriesList/>
        <PostsList category={this.props.match.params.category}/>
      </div>
    )}
}

const mapDispatchToProps = (dispatch) => {
  return {
    firstCall: () => dispatch(firstCall())
  }
}

export default connect(null, mapDispatchToProps)(Lists)
