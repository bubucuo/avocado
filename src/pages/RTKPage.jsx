import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../store";
import { increment } from "../store/counterSlice";

// 状态仓库的可以发生的行为： get\set\(取消)订阅
export default function RTKPage() {
  return (
    <div>
      <h3>RTKPage</h3>
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
