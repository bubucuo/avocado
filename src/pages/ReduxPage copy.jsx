import {
  useEffect,
  useLayoutEffect,
  useSyncExternalStore,
  useState,
  useReducer,
} from "react";
import store from "../store/";

export default function ReduxPage() {
  console.log("%c [  ]-6", "font-size:13px; background:pink; color:#bf2c9f;");
  //   const [, forceUpdate] = useState({}); //forceUpdate({})
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const update = () => {
    store.dispatch({ type: "ADD" });
  };

  //   useSyncExternalStore(store.subscribe, store.getState);

  useLayoutEffect(() => {
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
      <button onClick={update}>{store.getState()}</button>
    </div>
  );
}
