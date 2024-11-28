import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../store";
import { increment } from "../store/counterSlice";
import React, { useEffect, useLayoutEffect, useSyncExternalStore } from "react";

// 状态仓库的可以发生的行为： get\set\(取消)订阅
export default function RTKPage() {
  const count = store.getState().counter.value;
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const handle = () => {
    store.dispatch(increment());
  };

  useSyncExternalStore(store.subscribe, store.getState);

  // useLayoutEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     forceUpdate();
  //   });
  //   return () => {
  //     // 组件卸载之前执行，取消订阅
  //     if (unsubscribe) {
  //       unsubscribe();
  //     }
  //   };
  // }, [store]);

  const [num, setNum] = React.useState(0);

  // 依赖项没定义
  // useEffect(effect, deps)
  // effect 会在组件挂载/更新之后异步执行
  // deps 依赖项，当依赖项发生变化时，effect会重新执行
  // cleanup执行的时机是在组件卸载之前执行和依赖项发生改变之前执行
  useEffect(() => {
    // setNum(num + 1); // ! 会导致死循环

    console.log("useEffect", num);

    // cleanup | detroy
    // 清理函数、销毁函数
    // 1. 组件卸载之前执行
    // 2. 依赖项发生改变之前执行
    return () => {
      console.log("useEffect return", num);
    };
  }, [num]);

  return (
    <div>
      <h3>RTKPage</h3>

      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        {num}
      </button>
      <button onClick={handle}>{count}</button>
      <Provider store={store}>
        <Child />
      </Provider>
    </div>
  );
}

function Child() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const update = () => {
    dispatch(increment());
  };
  return (
    <div>
      <h2>Child</h2>
      <button onClick={update}>{count}</button>
    </div>
  );
}
