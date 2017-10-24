import React, {Component} from 'react';
import PostsList from '../../components/PostsList/PostsList'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import { firstCall, selectSort } from '../../actions'
import { connect } from 'react-redux'
import Select from 'react-select'
import capitalize from 'capitalize'
import 'react-select/dist/react-select.css';
import './ListsContainer.css'



class ListsContainer extends Component {

  componentDidMount(){
    this.props.firstCall()
  }

  render() {
    const { options, sortBy, selected, category } = this.props
    return (
      <div className="blog-list">
        <CategoriesList/>
        <div className="sort-breadcumb">
          <h3>{capitalize.words(category)}</h3>
          <Select className="sort-dropdown" value={selected} options={options} onChange={sortBy} resetValue={'SHOW_ALL'}/>
        </div>
        <PostsList/>
      </div>
    )}
}

const mapStatetoProps = ({ uiState }, ownProps) => {
  return {
    options: uiState.sortBy.options,
    selected: uiState.sortBy.selected,
    category: ownProps.match.params.category || 'all categories'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    firstCall: () => dispatch(firstCall()),
    sortBy: (value) => dispatch(selectSort(value))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ListsContainer)
