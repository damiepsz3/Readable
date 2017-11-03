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
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages'; //delete

import { makeSelectError, makeSelectLoading } from 'containers/App/selectors';
import { loadPosts, loadComments } from 'containers/App/actions';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { makeSelectPostCategory } from './selectors'
import saga from './saga';
import reducer from './reducer';


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
    this.props.fetchPosts()
    this.props.fetchComments()
  }

  render() {
    console.log(this.props);
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  posts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(loadPosts()),
    fetchComments: () => dispatch(loadComments())
  }
}

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPostCategory(),
  loading: makeSelectError(),
  error: makeSelectError(),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withSaga = injectSaga({ key: 'home', saga })

export default compose(
  withSaga,
  withConnect,
)(HomePage)
