import React, {Component} from 'react';
import PostsList from '../components/PostsList'
import CategoriesList from '../components/CategoriesList'
import { firstCall, selectSort } from '../actions'
import { connect } from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css';



class ListsContainer extends Component {

  componentDidMount(){
    this.props.firstCall()
  }

  render() {
    const { options, sortBy, selected } = this.props
    return (
      <div className="blog-list">
        <CategoriesList/>
        <div className="sort-breadcumb">
          <Select className="sort-dropdown" value={selected} options={options} onChange={sortBy}/>
        </div>
        <PostsList/>
      </div>
    )}
}

const mapStatetoProps = ({ uiState }) => {
  return {
    options: uiState.sortBy.options,
    selected: uiState.sortBy.selected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    firstCall: () => dispatch(firstCall()),
    sortBy: (value) => dispatch(selectSort(value))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ListsContainer)
