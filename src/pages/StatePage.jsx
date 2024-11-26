// hooks api: 关联一些信息(值、函数)到组件上
import React from "react";
import { useState, useReducer } from "react";

// function useState() {
//   return [state, setState];

//   return {
//     state,
//     setState,
//   };
// }
// context场景：祖先组件传递给后代组件，并且这个值是个state
// 1. 创建一个Context
const UserContext = React.createContext({ count: 100 });
const ThemeContext = React.createContext({ backgroundColor: "red" });

// useState(state)
// 定义一个state
// state: 变量，这个变量改变了，组件需要随之更新
const rule = (x) => x + 1;
export default function StatePage() {
  // 0: count的初始值
  // 颗粒度更小
  const [count, setCount] = useState(() => 0);
  const [count2, setCount2] = useReducer(rule, 0);
  const [num, setNum] = useState(0);

  const [bgColor, setBgColor] = useState("red");
  return (
    <div>
      <h3>StatePage</h3>
      <button
        onClick={() => {
          // setCount(count + 1); // 批量更新（异步更新）
          setCount((count) => {
            // 如果state修改规则非常复杂，那这个时候推荐useReducer
            const newCount = count;
            return newCount + 1;
          });
        }}
      >
        {count}
      </button>

      <button
        onClick={() => {
          setCount2();
        }}
      >
        {count2}
      </button>

      <button
        onClick={() => {
          setBgColor(getRandomColor());
        }}
      >
        changeColor
      </button>

      <Child count={count} num={num} setNum={setNum} />

      <ThemeContext.Provider value={{ backgroundColor: bgColor }}>
        {/* 2. 通过Provider传参 */}
        <UserContext.Provider value={{ count: num }}>
          <Child2 count={count} count2={count2} num={num} setNum={setNum} />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

function Child({ count, num, setNum }) {
  const { backgroundColor } = React.useContext(ThemeContext);
  return (
    <div style={{ backgroundColor }}>
      <h3>Child</h3>
      <p>{count}</p>
      <button onClick={() => setNum(num + 1)}>num:{num}</button>
    </div>
  );
}

function Child2({ count, count2, num, setNum }) {
  const { backgroundColor } = React.useContext(ThemeContext);
  return (
    <div style={{ backgroundColor }}>
      <h3>Child2</h3>
      <p>{count2}</p>
      <button onClick={() => setNum(num + 1)}>num:{num}</button>

      {/* 假如 GrandSon 是StatePage的第18代 */}
      <ThemeContext.Provider value={{ backgroundColor: "green" }}>
        <GrandSon count={count} />
      </ThemeContext.Provider>
    </div>
  );
}

function GrandSon(props) {
  const { count } = React.useContext(UserContext);
  const { backgroundColor } = React.useContext(ThemeContext);

  return (
    <div style={{ backgroundColor }}>
      <h1>GrandSon</h1>
      <p>{count}</p>
    </div>
  );
}

// 合成事件：React的事件系统：磨平了浏览器的兼容性问题，给开发者提供了统一的事件接口

// useState->setState
// if (newState === state) {
//   // ...不更新函数组件
// } else {
//   // 更新函数组件
//   StatePage();
// }

// useReducer->setState
// StatePage()

function getRandomColor(props) {
  return "#" + Math.floor(Math.random() * Math.pow(10, 6));
}
