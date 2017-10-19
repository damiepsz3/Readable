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
    const { options, selected, sortBy } = this.props
    return (
      <div className="blog-content">
        <CategoriesList/>
        <div>
          <Select value={selected} options={options} onChange={sortBy}/>
          <PostsList />
        </div>
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
