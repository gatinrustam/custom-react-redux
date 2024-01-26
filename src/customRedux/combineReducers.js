export function combineReducers(reducersObj) {
  return (state = {}, action) => {
    let combineState = {};
    
    for (const key in reducersObj) {
      combineState[key] = reducersObj[key](state[key], action)
    }

    return combineState
  }
}