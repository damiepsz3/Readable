import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AppBar from 'material-ui/Appbar'

export class NavBar extends React.PureComponent {

  render() {
    return (
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }

}

NavBar.proptypes = {
  onTogleButton: PropTypes.func
}

export function mapDispatchToProps(dispatch) {
  return {
    onTogleButton: () => dispatch(openDrawer())
  }
}

export default connect(null, mapDispatchToProps)(NavBar);
