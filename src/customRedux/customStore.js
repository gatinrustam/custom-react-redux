export function createStore(reducer, initialState) {
  let state = reducer(initialState, { type: '@@redux/INIT9.7.f.i.d.f' });
  let subscriptions = [];

  return {
    dispatch: (action) => {
      state = reducer(state, action);
      subscriptions.forEach(callback => callback())
    },
    subscribe: (callback) => {
      subscriptions.push(callback);

      return () => {
        subscriptions = subscriptions.filter(subscription => subscription !== callback)
      }
    },
    getState: () => { return state }
  }
}