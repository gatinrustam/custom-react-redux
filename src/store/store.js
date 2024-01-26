// import { createStore } from 'redux';
import { createStore } from '../customRedux/customStore';

function reducer(state, action) {
  if (action.type === "INCREMENT_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if (action.type === "DECREMENT_COUNTER") {
    return {
      ...state,
      counter: state.counter - 1
    }
  }

  if (action.type === "RESET_COUNTER") {
    return {
      ...state,
      counter: 0
    }
  }

  return state;
}

const initialState = {
  counter: 0,
};


export const store = createStore(reducer, initialState);