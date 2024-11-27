import store from "../store";
import { Provider, useSelector, useDispatch } from "react-redux";

export default function ReactReduxPage() {
  return (
    <div>
      <h3>ReactReduxPage</h3>

      <Provider store={store}>
        <Child />
      </Provider>
    </div>
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
      <button onClick={update}>{count}</button>
    </div>
  );
}
