import React, { useState, useMemo } from "react";

const UserContext = React.createContext();

//  useMemo 的适用场景
// 1. 需要进行大量计算，或者进行大量逻辑判断 （空间换时间）
// 2. 包存的数据是引用类型，且数据的引用不发生变化 {} === {}
export default function UseMemoPage() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const [num, setNum] = useState(0);

  const expensive = useMemo(() => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
    //只有count变化，这里才重新执行
  }, [count]);

  // const expensive = () => {
  //   console.log("compute");
  //   let sum = 0;
  //   for (let i = 0; i < count; i++) {
  //     sum += i;
  //   }
  //   return sum;
  //   //只有count变化，这里才重新执行
  // };

  const contextValue = useMemo(() => ({ value, setValue }), [value, setValue]);

  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>expensive:{expensive}</p>
      <p>{count}</p>
      <button onClick={() => setNum(num + 1)}>num:{num}</button>

      <button onClick={() => setCount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setValue(event.target.value)} />

      <UserContext.Provider value={contextValue}>
        <Child />
      </UserContext.Provider>
    </div>
  );
}

const Child = React.memo(function Child(props) {
  const { value } = React.useContext(UserContext);
  console.log(
    "%c [ Child ]-46",
    "font-size:13px; background:pink; color:#bf2c9f;"
  );
  return <div>Child:{value}</div>;
});
