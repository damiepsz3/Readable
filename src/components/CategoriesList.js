import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class CategoriesList extends Component {
  render() {
    const { categories } = this.props
    return (
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
