
export function applyMiddleware(...middlewares) {
  return (createStore) => {
    return (reducer, initialState) => {
      const store = createStore(reducer, initialState);
      const originalDispatch = store.dispatch;

      store.dispatch = (action) => {

        const storeApi = { 
          getState: store.getState, 
          dispatch: originalDispatch
        }
        
        // TODO: rewrite compose by reduceRight
        let fn = originalDispatch;
        for (let i = middlewares.length - 1; i >= 0; i--) {
          fn = middlewares[i](storeApi)(fn)
        }
        fn(action);
      }

      return store;
    }

  }
}