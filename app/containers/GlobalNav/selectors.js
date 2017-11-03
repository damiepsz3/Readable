import { createSelector } from 'reselect';

const selectGlobalNav = (state) => state.get('globalNav');

const makeSelectDrawerToggle = () => createSelector(
  selectGlobalNav,
  (navState) => navState.get('drawerToggle')
);

export {
  selectGlobalNav,
  makeSelectDrawerToggle,
};
