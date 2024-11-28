// import { createStore } from "redux";

// function countReducer(state = 100, action) {
//   switch (action.type) {
//     case "ADD":
//       return state + 1;
//     case "MINUS":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// const store = createStore(countReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// // redux
// function createStore(reducer) {
//   let currentState;
//   let listeners = [];

//   function getState() {
//     return currentState;
//   }
//   function dispatch(action) {
//     currentState = reducer(currentState, action);// setState
//     listeners.forEach((listener) => listener()); // 执行订阅函数 forceUpdate
//   }

//   function subscribe(listener) {
//     listeners.push(listener);
//     return () => {
//       const index = listeners.indexOf(listener);
//       listeners.splice(index, 1);
//     };
//   }

//   dispatch({ type: "///bubucuo" });

//   return { getState, dispatch, subscribe };
// }
