import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global')

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectCategories = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('categories')
);

const makeSelectorDrawer = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('drawerIsOpen')
)

export {
  selectGlobal,
  makeSelectCategories,
  makeSelectError,
  makeSelectLoading,
  makeSelectLocation,
  makeSelectorDrawer
};
