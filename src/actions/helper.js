export const createShouldFetch = (reducer, item) => (state) => {
  if(!state[reducer][item].length) {
    return true
  } else {
    return false
  }
}
