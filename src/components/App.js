import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../App.css';
import * as BlogApi from '../utils/BlogAPI'

class App extends Component {
  state = {
    categories: ['terror', 'humor', 'house']
  }

  componentDidMount () {
    // BlogApi.getCategories().then( resp => console.log(resp));
    // BlogApi.getCatPost('react').then( resp => console.log(resp));
    // BlogApi.getPosts().then( resp => console.log(resp));
    BlogApi.postComments("8xf0y6ziyjabvozdd253nd").then(resp => console.log(resp))

  }

  render() {
    const { categories } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="blog-categories">
            <div className="blog-categories-title">
              <h1>Readable</h1>
            </div>
            <div className="blog-categories-content">
              {categories.map((cat) => (
                <li key={cat} className={cat}>
                  <span>{cat}</span>
                </li>
              ))}
            </div>
          </div>
        )} />
      </div>
    );
  }
}

export default App;
