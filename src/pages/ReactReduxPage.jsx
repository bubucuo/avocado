import { Provider, useSelector, useDispatch } from "react-redux";
import store from "../store";

export default function ReactReduxPage() {
  return (
    <Provider store={store}>
      <div>
        <h3>ReactReduxPage</h3>
        <Child />
      </div>
    </Provider>
  );
}

function Child() {
  const count = useSelector((state) => state);

  const dispatch = useDispatch();
  const update = () => {
    dispatch({ type: "ADD" });
  };
  return (
    <div>
      <h3>Child</h3>
      <button onClick={update}>{count}</button>
    </div>
  );
}
