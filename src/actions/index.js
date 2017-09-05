export const ADD_RECIPE = 'ADD_RECIPE'

export function addRecipe({ day, recipe, meal }) {
  return {
    type: ADD_RECIPE,
    recipe,
    day,
    meal,
  }
}
