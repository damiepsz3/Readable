/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
//add in the future
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectCategories, makeSelectError, makeSelectLoading } from 'containers/App/selectors';
import messages from './messages';

import { loadCategories } from '../App/actions'
import reducer from './reducer'
// import saga from './saga'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // console.log(this.props);
    this.props.onComponentMount()
  }

  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}

//review proptypes inside categories array
HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  categories: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ])
}

export function mapDispatchToProps(dispatch) {
  return {
    onComponentMount: () => dispatch(loadCategories())
  }
}


const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'home', reducer });
// const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  // withReducer,
  // withSaga,
  withConnect,
)(HomePage);
