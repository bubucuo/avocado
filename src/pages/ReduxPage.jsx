import React from "react";
import store from "../store";

// use

export default function ReduxPage() {
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
  const handle = () => {
    // 修改state，是更新store 中的state，同时执行订阅函数（forceUpdate）
    store.dispatch({ type: "ADD" });
  };

  // React.useSyncExternalStore(store.subscribe, store.getState);

  // useLayoutEffect 第一个参数是一个函数，执行时机是在dom更新之后同步执行
  // useEffect 第一个参数是一个函数，执行时机是在dom更新之后异步执行
  React.useLayoutEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <div>
      <h3>ReduxPage</h3>
      <button onClick={handle}>{store.getState()}</button>
    </div>
  );
}
