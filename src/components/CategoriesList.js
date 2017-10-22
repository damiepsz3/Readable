import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import capitalize from 'capitalize'

class CategoriesList extends Component {
  render() {
    const { categories } = this.props
    return (
      <div className="blog-categories">
        <nav>
          {categories.map((cat) => (
            <Link key={cat.path} to={`/${cat.path}`}>
              {capitalize.words(cat.name)}
            </Link>
          ))}
        </nav>
    </div>
    );
  }
}

const mapStateToProps = ({ entities }) => {
  const { categories } = entities
  return {
    categories: Object.keys(categories.byId).map(id => categories.byId[id])
  }
}

export default connect(mapStateToProps)(CategoriesList)
