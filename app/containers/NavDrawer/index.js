/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectCategories, makeSelectError, makeSelectLoading, makeSelectorDrawer } from 'containers/App/selectors';

import { loadCategories } from 'containers/App/actions'
// import reducer from './reducer'
import saga from './saga'

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import AppBar from 'components/AppBar'
// import NavDrawer from 'components/NavDrawer'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem';

export class NavDrawer extends React.PureComponent {
  componentDidMount() {
    console.log(this.props);
    this.props.onComponentMount()
  }

  render(){
    return (
      <div>


      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  categories: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  drawerIsOpen: PropTypes.bool
}

export function mapDispatchToProps(dispatch) {
  return {
    onComponentMount: () => dispatch(loadCategories()),
  }
}


const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  drawerIsOpen: makeSelectorDrawer(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NavDrawer);
