export const createShouldFetch = (reducer, item) => (state) => {
  if(!state[reducer][item].byId.length) {
    return true
  } else {
    return false
  }
}
