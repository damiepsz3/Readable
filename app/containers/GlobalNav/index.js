import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom'

import { loadCategories } from 'containers/App/actions';
import { makeSelectCategories, makeSelectError, makeSelectLoading } from 'containers/App/selectors';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { openCloseDrawer } from './actions'
import { makeSelectDrawerToggle } from './selectors'
import reducer from './reducer';
import saga from './saga';

import AppBar from 'material-ui/Appbar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class GlobalNav extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { drawerToggle, onTogglePress, categories, history } = this.props
    return (
      <div>
        <AppBar onLeftIconButtonTouchTap={onTogglePress} title='readable'/>
        <Drawer open={drawerToggle}>
          <AppBar iconElementLeft={<IconButton><NavigationClose /></IconButton>} onLeftIconButtonTouchTap={onTogglePress} title='Menu'/>
          {categories && (
            categories.map(category => (
              <div key={category.path}>
                <MenuItem><Link to={`/${category.path}`}>{category.name}</Link></MenuItem>
                <Divider />
              </div>
            ))
          )}
        </Drawer>
      </div>
    );
  }
}

GlobalNav.propTypes = {
  drawerToggle: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  categories: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(loadCategories()),
    onTogglePress: () => dispatch(openCloseDrawer())
  }
}

const mapStateToProps = createStructuredSelector({
  drawerToggle: makeSelectDrawerToggle(),
  categories: makeSelectCategories(),
  loading: makeSelectError(),
  error: makeSelectError(),
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'globalNav', reducer})
const withSaga = injectSaga({ key: 'globalNav', saga})

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GlobalNav)
