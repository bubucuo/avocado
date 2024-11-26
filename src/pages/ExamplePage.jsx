import {
  Component,
  // useState,
  useReducer,
  useEffect,
  // useLayoutEffect,
} from "react";

const data = [
  {
    key: "key1",
    name: "name1",
  },
  {
    key: "key2",
    name: "name2",
  },
  {
    key: "key3",
    name: "name3",
  },
];

class ClassComponent extends Component {
  state = { count: 0 };
  render() {
    return (
      <div className="class border">
        {this.props.name}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            // this.setState({ count: this.state.count + 2 });
          }}
        >
          {this.state.count}
        </button>
      </div>
    );
  }
}

function FunctionComponent(props) {
  const [count1, setCount1] = useReducer((x) => x + 1, 0);

  // passive effect 异步执行
  // 组件挂载之后异步执行
  useEffect(() => {
    // network request
    // setCount1();
    // return () => {
    //   console.log("销毁");
    // };
  }, [count1]);

  return (
    <div className="border">
      <p>{props.name}</p>
      <p>num:{props.num}</p>
      <button
        onClick={() => {
          setCount1();
        }}
      >
        {count1}
      </button>
    </div>
  );
}

// mount
// update

// 函数组件
const A = () => [1, 2, 3];
const B = () => (
  <>
    <li>B1</li>
    <li>B2</li>
  </>
);

let num = 10;

const C = () => {
  return num % 2 === 0 ? <h1>偶数</h1> : null;
};

const jsx = (
  <div className="box border">
    {/* 原生标签 */}
    <h1 className="border">omg</h1>
    {/* 文本节点 */}
    text
    {/* 函数组件 */}
    <FunctionComponent name="函数组件" num="1" />
    <A />
    <ul>
      <B />
    </ul>
    <C />
    {/* 类组件 */}
    <ClassComponent name="类组件" />
    {/* Fragment */}
    <>
      <h1>1</h1>
      <h1>2</h1>
    </>
    {/* 数组 */}
    {/* index不具备稳定性 */}
    {data.map((item, index) => (
      <h5 key={item.key}>
        {index}: {item.name}
      </h5>
    ))}
    {/* 条件渲染 */}
    {data.length > 0 && <h1>数组有{data.length}项</h1>}
    {/* 逻辑与 */}
    {/* 问号表达式渲染 */}
    {data.length > 0 ? <h1>数组有{data.length}项</h1> : <h1>数组为空</h1>}
  </div>
);

export default jsx;

// document.createDocumentFragment

// ! 原生节点 有对应的dom节点
// 1. 原生标签节点 div\span\a等 HostComponent
// 2. 文本节点

// ! 非原生节点 没有对应的dom节点
// 函数组件、类组件、Provider、Consumer、Fragment等
