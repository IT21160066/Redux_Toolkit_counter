import { createStore } from "redux";

const reducerFunction = (state = { counter: 0 }, action) => {
  //synchronus function
  //not mutate the original state
  //always copy of the state, main state should be updated

  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  return state;
};

const store = createStore(reducerFunction);

export default store;
